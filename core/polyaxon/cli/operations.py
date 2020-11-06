#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import sys

import click

from polyaxon_sdk.rest import ApiException
from urllib3.exceptions import HTTPError

from polyaxon.api import REWRITE_SERVICES_V1, SERVICES_V1
from polyaxon.cli.dashboard import get_dashboard, get_dashboard_url
from polyaxon.cli.errors import handle_cli_error
from polyaxon.cli.options import OPTIONS_PROJECT, OPTIONS_RUN_UID
from polyaxon.client import RunClient
from polyaxon.client.run import get_run_logs
from polyaxon.env_vars.getters import get_project_or_local, get_project_run_or_local
from polyaxon.exceptions import PolyaxonClientException
from polyaxon.lifecycle import LifeCycle, V1Statuses
from polyaxon.managers.run import RunConfigManager
from polyaxon.polyaxonfile import OperationSpecification
from polyaxon.polyflow import V1RunKind
from polyaxon.utils import cache
from polyaxon.utils.csv_utils import write_csv
from polyaxon.utils.formatting import (
    Printer,
    dict_tabulate,
    dict_to_tabulate,
    flatten_keys,
    get_meta_response,
    list_dicts_to_csv,
    list_dicts_to_tabulate,
)
from polyaxon.utils.validation import validate_tags

DEFAULT_EXCLUDE = [
    "owner",
    "project",
    "description",
    "content",
    "raw_content",
    "live_state",
    "readme",
    "settings",
    "meta_info",
    "schedule_at",
    "original",
    "pipeline",
    "role",
    "status_conditions",
]


def get_run_details(run):  # pylint:disable=redefined-outer-name
    if run.description:
        Printer.print_header("Run description:")
        click.echo("{}\n".format(run.description))

    if run.inputs:
        Printer.print_header("Run inputs:")
        dict_tabulate(run.inputs)

    if run.outputs:
        Printer.print_header("Run outputs:")
        dict_tabulate(run.outputs)

    response = Printer.add_status_color(run.to_dict())
    response = dict_to_tabulate(
        response,
        humanize_values=True,
        exclude_attrs=[
            "project",
            "description",
            "readme",
            "content",
            "raw_content",
            "inputs",
            "outputs",
            "is_managed",
            "settings",
            "status_conditions",
        ],
    )

    Printer.print_header("Run info:")
    dict_tabulate(response)


@click.group()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.pass_context
def ops(ctx, project, uid):
    """Commands for ops/runs."""
    ctx.obj = ctx.obj or {}
    if project or uid:
        Printer.print_warning(
            "Passing arguments to command groups is deprecated and will be removed in v1.2! "
            "Please use arguments on the sub-command directly: `polyaxon ops SUB_COMMAND --help`"
        )
    ctx.obj["project"] = project
    if ctx.invoked_subcommand not in ["ls"]:
        ctx.obj["run_uuid"] = uid


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(
    "--io",
    "-io",
    is_flag=True,
    help="List runs with their inputs/outputs (params, metrics, results, ...).",
)
@click.option(
    "--to-csv",
    is_flag=True,
    help="Saves the results to a csv file. Note that this flag requires pandas",
)
@click.option(
    "--query", "-q", type=str, help="To filter the runs based on this query spec."
)
@click.option(
    "--sort", "-s", type=str, help="To order the runs based on this sort spec."
)
@click.option("--limit", "-l", type=int, help="To limit the list of runs.")
@click.option("--offset", "-off", type=int, help="To offset the list of runs.")
@click.option("--columns", "-c", type=str, help="The columns to show.")
@click.pass_context
def ls(ctx, project, io, to_csv, query, sort, limit, offset, columns):
    """List runs for this project.

    Uses /docs/core/cli/#caching

    Examples:

    Get all runs:

    \b

    Get all runs with with status {created or running}, and
    creation date between 2018-01-01 and 2018-01-02, and params activation equal to sigmoid
    and metric loss less or equal to 0.2

    \b
    $ polyaxon ops ls \
    -q "status:created|running, started_at:2018-01-01..2018-01-02, \
    params.activation:sigmoid, metrics.loss:<=0.2"


    Get all runs sorted by update date:

    \b
    $ polyaxon ops ls -s "-updated_at"

    Get all runs of kind job:

    \b
    $ polyaxon ops ls -q "kind: job"

    Get all runs of kind service:

    \b
    $ polyaxon ops ls -q "kind: service"
    """
    owner, project_name = get_project_or_local(
        project or ctx.obj.get("project"), is_cli=True
    )

    try:
        polyaxon_client = RunClient(owner=owner, project=project_name)
        response = polyaxon_client.list(
            limit=limit, offset=offset, query=query, sort=sort
        )
    except (ApiException, HTTPError) as e:
        handle_cli_error(
            e, message="Could not get runs for project `{}`.".format(project_name)
        )
        sys.exit(1)

    meta = get_meta_response(response)
    if meta:
        Printer.print_header("Runs for project `{}/{}`.".format(owner, project_name))
        Printer.print_header("Navigation:")
        dict_tabulate(meta)
    else:
        Printer.print_header(
            "No runs found for project `{}/{}`.".format(owner, project_name)
        )

    objects = [Printer.add_status_color(o.to_dict()) for o in response.results]
    columns = validate_tags(columns)
    if io:
        objects, prefixed_columns = flatten_keys(
            objects=objects,
            columns=["inputs", "outputs"],
            columns_prefix={"inputs": "in", "outputs": "out"},
        )
        if columns:
            columns = {prefixed_columns.get(col, col) for col in columns}
        if to_csv:
            objects = list_dicts_to_csv(
                objects,
                include_attrs=columns,
                exclude_attrs=DEFAULT_EXCLUDE,
            )
        else:
            objects = list_dicts_to_tabulate(
                objects,
                include_attrs=columns,
                exclude_attrs=DEFAULT_EXCLUDE,
                humanize_values=True,
                upper_keys=True,
            )
    else:
        if to_csv:
            objects = list_dicts_to_csv(
                objects,
                include_attrs=columns,
                exclude_attrs=DEFAULT_EXCLUDE + ["inputs", "outputs"],
            )
        else:
            objects = list_dicts_to_tabulate(
                objects,
                include_attrs=columns,
                exclude_attrs=DEFAULT_EXCLUDE + ["inputs", "outputs"],
                humanize_values=True,
                upper_keys=True,
            )
    if objects:
        if to_csv:
            filename = "./results.csv"
            write_csv(objects, filename=filename)
            Printer.print_success("CSV file generated: `{}`".format(filename))
        else:
            Printer.print_header("Runs:")
            objects.pop("project_name", None)
            dict_tabulate(objects, is_list_dict=True)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.pass_context
def get(ctx, project, uid):
    """Get run.

    Uses /docs/core/cli/#caching

    Examples for getting a run:

    \b
    $ polyaxon ops get  # if run is cached

    \b
    $ polyaxon ops get --uid=8aac02e3a62a4f0aaa257c59da5eab80 # project is cached

    \b
    $ polyaxon ops get --project=cats-vs-dogs -uid 8aac02e3a62a4f0aaa257c59da5eab80

    \b
    $ polyaxon ops get -p alain/cats-vs-dogs --uid=8aac02e3a62a4f0aaa257c59da5eab80
    """

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )

    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        polyaxon_client.refresh_data()
        config = polyaxon_client.client.sanitize_for_serialization(
            polyaxon_client.run_data
        )
        cache.cache(
            config_manager=RunConfigManager,
            config=config,
            owner=owner,
            project=project_name,
        )
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not load run `{}` info.".format(run_uuid))
        sys.exit(1)

    get_run_details(polyaxon_client.run_data)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.pass_context
def delete(ctx, project, uid):
    """Delete a run.

    Uses /docs/core/cli/#caching

    Example:

    \b
    $ polyaxon ops delete

    \b
    $ polyaxon ops delete --uid=8aac02e3a62a4f0aaa257c59da5eab80  # project is cached

    \b
    $ polyaxon ops delete --project=cats-vs-dogs -uid 8aac02e3a62a4f0aaa257c59da5eab80
    """
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    if not click.confirm("Are sure you want to delete run `{}`".format(run_uuid)):
        click.echo("Existing without deleting the run.")
        sys.exit(1)

    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        polyaxon_client.delete()
        # Purge caching
        RunConfigManager.purge()
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not delete run `{}`.".format(run_uuid))
        sys.exit(1)

    Printer.print_success("Run `{}` was delete successfully".format(run_uuid))


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option("--name", type=str, help="Name of the run (optional).")
@click.option("--description", type=str, help="Description of the run (optional).")
@click.option(
    "--tags", type=str, help="Tags of the run, comma separated values (optional)."
)
@click.pass_context
def update(ctx, project, uid, name, description, tags):
    """Update run.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon ops  update --uid=8aac02e3a62a4f0aaa257c59da5eab80
    --description="new description for my runs"

    \b
    $ polyaxon ops  update --project=cats-vs-dogs -uid 8aac02e3a62a4f0aaa257c59da5eab80
    --tags="foo, bar" --name="unique-name"
    """
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    update_dict = {}

    if name:
        update_dict["name"] = name

    if description:
        update_dict["description"] = description

    tags = validate_tags(tags)
    if tags:
        update_dict["tags"] = tags

    if not update_dict:
        Printer.print_warning("No argument was provided to update the run.")
        sys.exit(0)

    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        response = polyaxon_client.update(update_dict)
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not update run `{}`.".format(run_uuid))
        sys.exit(1)

    Printer.print_success("Run updated.")
    get_run_details(response)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--yes",
    "-y",
    is_flag=True,
    default=False,
    help="Automatic yes to prompts. "
    'Assume "yes" as answer to all prompts and run non-interactively.',
)
@click.pass_context
def stop(ctx, project, uid, yes):
    """Stop run.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon ops stop

    \b
    $ polyaxon ops stop --uid=8aac02e3a62a4f0aaa257c59da5eab80
    """
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    if not yes and not click.confirm(
        "Are sure you want to stop " "run `{}`".format(run_uuid)
    ):
        click.echo("Existing without stopping run.")
        sys.exit(0)

    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        polyaxon_client.stop()
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not stop run `{}`.".format(run_uuid))
        sys.exit(1)

    Printer.print_success("Run is being stopped.")


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--copy",
    "-c",
    is_flag=True,
    default=False,
    help="To copy the run before restarting.",
)
@click.option(
    "-f",
    "--file",
    "polyaxonfile",
    multiple=True,
    type=click.Path(exists=True),
    help="The polyaxonfiles to update with, they should be an operation preset.",
)
@click.pass_context
def restart(ctx, project, uid, copy, polyaxonfile):
    """Restart run.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon run --uid=8aac02e3a62a4f0aaa257c59da5eab80 restart
    """
    content = None
    if polyaxonfile:
        content = OperationSpecification.read(polyaxonfile, is_preset=True).to_dict(
            dump=True
        )

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        response = polyaxon_client.restart(override_config=content, copy=copy)
        Printer.print_success(
            "Run was {} with uid {}".format(
                "copied" if copy else "restarted", response.uuid
            )
        )
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not restart run `{}`.".format(run_uuid))
        sys.exit(1)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "-f",
    "--file",
    "polyaxonfile",
    multiple=True,
    type=click.Path(exists=True),
    help="The polyaxonfiles to update with, they should be an operation preset.",
)
@click.pass_context
def resume(ctx, project, uid, polyaxonfile):
    """Resume run.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon ops resume --uid=8aac02e3a62a4f0aaa257c59da5eab80
    """
    content = None
    if polyaxonfile:
        content = OperationSpecification.read(polyaxonfile, is_preset=True).to_dict(
            dump=True
        )

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        response = polyaxon_client.resume(override_config=content)
        Printer.print_success("Run was resumed with uid {}".format(response.uuid))
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not resume run `{}`.".format(run_uuid))
        sys.exit(1)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.pass_context
def invalidate(ctx, project, uid):
    """Invalidate the run's cache state.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon ops invalidate
    """

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    try:
        polyaxon_client = RunClient(
            owner=owner, project=project_name, run_uuid=run_uuid
        )
        response = polyaxon_client.invalidate()
        Printer.print_success("Run was invalidated with uid {}".format(response.uuid))
    except (ApiException, HTTPError) as e:
        handle_cli_error(e, message="Could not invalidate run `{}`.".format(run_uuid))
        sys.exit(1)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option("--watch", "-w", is_flag=True, help="Watch statuses.")
@click.pass_context
def statuses(ctx, project, uid, watch):
    """Get run or run job statuses.

    Uses /docs/core/cli/#caching

    Examples getting run statuses:

    \b
    $ polyaxon ops statuses

    \b
    $ polyaxon ops statuses -uid=8aac02e3a62a4f0aaa257c59da5eab80
    """

    def _handle_run_statuses():
        if not conditions:
            return
        Printer.print_header("Latest status:")
        latest_status = Printer.add_status_color(
            {"status": status}, status_key="status"
        )
        click.echo("{}\n".format(latest_status["status"]))

        objects = list_dicts_to_tabulate(
            [
                Printer.add_status_color(o.to_dict(), status_key="type")
                for o in conditions
            ]
        )
        if objects:
            Printer.print_header("Conditions:")
            dict_tabulate(objects, is_list_dict=True)

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )

    client = RunClient(owner=owner, project=project_name, run_uuid=run_uuid)
    if watch:
        try:
            for status, conditions in client.watch_statuses():
                _handle_run_statuses()
        except (ApiException, HTTPError, PolyaxonClientException) as e:
            handle_cli_error(
                e, message="Could get status for run `{}`.".format(run_uuid)
            )
            sys.exit(1)
    else:
        try:
            status, conditions = client.get_statuses()
            _handle_run_statuses()
        except (ApiException, HTTPError, PolyaxonClientException) as e:
            handle_cli_error(
                e, message="Could get status for run `{}`.".format(run_uuid)
            )
            sys.exit(1)


# @ops.command()
# @click.option("--gpu", "-g", is_flag=True, help="List run GPU resources.")
# @click.pass_context
# def resources(ctx, gpu):
#     """Get run or run job resources.
#
#     Uses /docs/core/cli/#caching
#
#     Examples for getting run resources:
#
#     \b
#     $ polyaxon ops resources -uid=8aac02e3a62a4f0aaa257c59da5eab80
#
#     For GPU resources
#
#     \b
#     $ polyaxon ops resources -uid=8aac02e3a62a4f0aaa257c59da5eab80 --gpu
#     """
#
#     def get_run_resources():
#         try:
#             message_handler = Printer.gpu_resources if gpu else Printer.resources
#             PolyaxonClient().run.resources(
#                 owner, project_name, run_uuid, message_handler=message_handler
#             )
#         except (ApiException, HTTPError) as e:
#             handle_cli_error(
#                 e, message="Could not get resources for run `{}`.".format(run_uuid)
#             )
#             sys.exit(1)
#
#     owner, project_name, run_uuid = get_project_run_or_local(
#         ctx.obj.get("project"), ctx.obj.get("run_uuid"), is_cli=True,
#     )
#
#     get_run_resources()


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--follow",
    "-f",
    is_flag=True,
    default=True,
    help="Stream logs after showing past logs.",
)
@click.option(
    "--hide-time",
    "-h",
    is_flag=True,
    default=False,
    help="Whether or not to hide timestamps from the log stream.",
)
@click.option(
    "--all-containers",
    is_flag=True,
    default=False,
    help="Whether to stream logs from all containers.",
)
@click.option(
    "--all-info",
    "-a",
    is_flag=True,
    default=False,
    help="Whether to show all information including container names, pod names, and node names.",
)
@click.pass_context
def logs(ctx, project, uid, follow, hide_time, all_containers, all_info):
    """Get run or run job logs.

    Uses /docs/core/cli/#caching

    Examples for getting run logs:

    \b
    $ polyaxon run logs

    \b
    $ polyaxon ops logs -uid=8aac02e3a62a4f0aaa257c59da5eab80 -p mnist
    """

    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    client = RunClient(owner=owner, project=project_name, run_uuid=run_uuid)

    try:
        get_run_logs(
            client=client,
            hide_time=hide_time,
            all_containers=all_containers,
            all_info=all_info,
            follow=follow,
        )
    except (ApiException, HTTPError, PolyaxonClientException) as e:
        handle_cli_error(
            e,
            message="Could not get logs for run `{}`.".format(client.run_uuid),
        )
        sys.exit(1)


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--path",
    type=str,
    help="Path to download, if not provided the full run's  artifacts will downloaded.",
)
@click.option(
    "--path-to",
    type=click.Path(exists=False),
    help="The destination where to download the artifacts.",
)
@click.option(
    "--no-untar",
    is_flag=True,
    default=False,
    help="Disable the automatic untar of the downloaded the artifacts.",
)
@click.pass_context
def artifacts(ctx, project, uid, path, path_to, no_untar):
    """Download outputs/artifacts for run.

    Uses /docs/core/cli/#caching

    Examples:

    \b
    $ polyaxon ops artifacts -uid=8aac02e3a62a4f0aaa257c59da5eab80

    \b
    $ polyaxon ops artifacts -uid=8aac02e3a62a4f0aaa257c59da5eab80 path="events/only"

    \b
    $ polyaxon ops artifacts -uid=8aac02e3a62a4f0aaa257c59da5eab80 path_to="this/path"
    """
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    try:
        client = RunClient(owner=owner, project=project_name, run_uuid=run_uuid)
        download_path = client.download_artifacts(
            path=path or "", path_to=path_to, untar=not no_untar
        )
    except (ApiException, HTTPError) as e:
        handle_cli_error(
            e, message="Could not download outputs for run `{}`.".format(run_uuid)
        )
        sys.exit(1)
    Printer.print_success("Files downloaded: path: {}".format(download_path))


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--yes",
    "-y",
    is_flag=True,
    default=False,
    help="Automatic yes to prompts. "
    'Assume "yes" as answer to all prompts and run non-interactively.',
)
@click.option(
    "--url",
    is_flag=True,
    default=False,
    help="Print the url of the dashboard for this run.",
)
@click.pass_context
def dashboard(ctx, project, uid, yes, url):
    """Open this operation's dashboard details in browser."""
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    subpath = "{}/{}/runs/{}".format(owner, project_name, run_uuid)
    get_dashboard(
        dashboard_url=get_dashboard_url(subpath=subpath), url_only=url, yes=yes
    )


@ops.command()
@click.option(*OPTIONS_PROJECT["args"], **OPTIONS_PROJECT["kwargs"])
@click.option(*OPTIONS_RUN_UID["args"], **OPTIONS_RUN_UID["kwargs"])
@click.option(
    "--yes",
    "-y",
    is_flag=True,
    default=False,
    help="Automatic yes to prompts. "
    'Assume "yes" as answer to all prompts and run non-interactively.',
)
@click.option(
    "--external",
    is_flag=True,
    default=False,
    help="Open the external service URL.",
)
@click.option(
    "--url",
    is_flag=True,
    default=False,
    help="Print the url of the dashboard or external service.",
)
@click.pass_context
def service(ctx, project, uid, yes, external, url):
    """Open the operation service in browser.

    N.B. The operation must have a run kind service, otherwise it will raise an error.

    You can open the service embedded in Polyaxon UI or using the real service URL,
    please use the `--external` flag.
    """
    owner, project_name, run_uuid = get_project_run_or_local(
        project or ctx.obj.get("project"),
        uid or ctx.obj.get("run_uuid"),
        is_cli=True,
    )
    client = RunClient(owner=owner, project=project_name, run_uuid=run_uuid)
    client.refresh_data()
    if client.run_data.kind != V1RunKind.SERVICE:
        Printer.print_warning(
            "Command expected an operation of "
            "kind `service` received kind: `{}`!".format(client.run_data.kind)
        )
        sys.exit(1)

    Printer.print_header("Waiting for running condition ...")
    client.wait_for_condition(
        statuses={V1Statuses.RUNNING} | LifeCycle.DONE_VALUES, print_status=True
    )

    client.refresh_data()
    if LifeCycle.is_done(client.run_data.status):
        Printer.print_header("The operations reached a done statuses.")
        latest_status = Printer.add_status_color(
            {"status": client.run_data.status}, status_key="status"
        )
        click.echo("{}\n".format(latest_status["status"]))

    run_url = get_dashboard_url(
        subpath="{}/{}/runs/{}/service".format(owner, project_name, run_uuid)
    )

    namespace = client.run_data.settings.namespace
    service_endpoint = SERVICES_V1
    if client.run_data.meta_info.get("rewrite_path", False):
        service_endpoint = REWRITE_SERVICES_V1
    external_run_url = get_dashboard_url(
        base=service_endpoint,
        subpath="{}/{}/{}/runs/{}/".format(namespace, owner, project_name, run_uuid),
    )

    if url:
        Printer.print_header("The service will be available at: {}".format(run_url))
        Printer.print_header(
            "You can also view it in an external link at: {}".format(external_run_url)
        )
        sys.exit(0)
    if not yes:
        click.confirm(
            "Dashboard page will now open in your browser. Continue?",
            abort=True,
            default=True,
        )
    if external:
        click.launch(external_run_url)
        sys.exit(0)
    click.launch(run_url)
