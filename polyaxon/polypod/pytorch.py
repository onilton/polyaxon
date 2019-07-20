from constants.experiment_jobs import get_experiment_job_uuid
from polypod.experiment import ExperimentSpawner
from polypod.templates.env_vars import get_env_var
from polypod.templates.labels import get_labels
from schemas import PytorchClusterConfig, PytorchSpecification, TaskType


class PytorchSpawnerMixin(object):
    def create_job_uuids(self):
        job_uuids = super().create_job_uuids()
        job_uuids[TaskType.WORKER] = [
            get_experiment_job_uuid(self.experiment_uuid_instance, TaskType.WORKER, i)
            for i in range(self.get_n_pods(task_type=TaskType.WORKER))]
        return job_uuids

    @property
    def resources(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_resources = PytorchSpecification.get_worker_resources(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_resources},
            TaskType.WORKER: worker_resources,
        }

    @property
    def labels(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_labels = PytorchSpecification.get_worker_labels(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_labels},
            TaskType.WORKER: worker_labels,
        }

    @property
    def annotations(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_annotations = PytorchSpecification.get_worker_annotations(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_annotations},
            TaskType.WORKER: worker_annotations,
        }

    @property
    def node_selectors(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_node_selectors = PytorchSpecification.get_worker_node_selectors(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_node_selector},
            TaskType.WORKER: worker_node_selectors,
        }

    @property
    def affinities(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_affinities = PytorchSpecification.get_worker_affinities(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_affinity},
            TaskType.WORKER: worker_affinities,
        }

    @property
    def tolerations(self):
        cluster, is_distributed, = self.spec.cluster_def
        worker_tolerations = PytorchSpecification.get_worker_tolerations(
            environment=self.spec.config.pytorch,
            cluster=cluster,
            is_distributed=is_distributed
        )
        return {
            TaskType.MASTER: {0: self.spec.master_tolerations},
            TaskType.WORKER: worker_tolerations,
        }

    def get_resources(self, task_type, task_idx):
        return self.resources.get(task_type, {}).get(task_idx)

    def get_annotations(self, task_type, task_idx):
        return self.annotations.get(task_type, {}).get(task_idx)

    def get_labels(self, task_type, task_idx, job_uuid):
        labels = self.resource_manager.get_labels(task_type=task_type,
                                                  task_idx=task_idx,
                                                  job_uuid=job_uuid)
        return get_labels(default_labels=labels,
                          labels=self.labels.get(task_type, {}).get(task_idx))

    def get_node_selector(self, task_type, task_idx):
        return self.node_selectors.get(task_type, {}).get(task_idx)

    def get_affinity(self, task_type, task_idx):
        return self.affinities.get(task_type, {}).get(task_idx)

    def get_tolerations(self, task_type, task_idx):
        return self.tolerations.get(task_type, {}).get(task_idx)

    def get_n_pods(self, task_type):
        return self.spec.cluster_def[0].get(task_type, 0)

    def get_cluster(self):
        cluster_def, _ = self.spec.cluster_def

        resource_name = self.resource_manager.get_resource_name(task_type=TaskType.MASTER,
                                                                task_idx=0)
        cluster_config = {
            TaskType.MASTER: [self._get_pod_address(resource_name)]
        }

        workers = []
        for i in range(cluster_def.get(TaskType.WORKER, 0)):
            resource_name = self.resource_manager.get_resource_name(task_type=TaskType.WORKER,
                                                                    task_idx=i)
            workers.append(self._get_pod_address(resource_name))

        cluster_config[TaskType.WORKER] = workers

        return PytorchClusterConfig.from_dict(cluster_config).to_dict()


class PytorchSpawner(PytorchSpawnerMixin, ExperimentSpawner):
    MASTER_SERVICE = True
    WORKER_SERVICE = False

    def get_env_vars(self, task_type, task_idx):
        if task_type == TaskType.MASTER:
            rank = 0
            master_addr = 'localhost'
        else:
            rank = task_idx + 1
            master_addr = self.resource_manager.get_resource_name(task_type=TaskType.MASTER,
                                                                  task_idx=0)
        env_vars = [
            get_env_var(name='MASTER_ADDR', value=master_addr),
            get_env_var(name='MASTER_PORT', value=self.ports[0]),
            get_env_var(name='WORLD_SIZE', value=self.get_n_pods(TaskType.WORKER) + 1),
            get_env_var(name='RANK', value=rank)
        ]
        return env_vars

    def start_experiment(self):
        experiment = super().start_experiment()
        experiment[TaskType.WORKER] = self.create_multi_jobs(task_type=TaskType.WORKER,
                                                             add_service=self.WORKER_SERVICE)
        return experiment

    def stop_experiment(self):
        deleted = super().stop_experiment()
        if not self.delete_multi_jobs(task_type=TaskType.WORKER, has_service=self.WORKER_SERVICE):
            deleted = False
        return deleted