#!/usr/bin/python
#
# Copyright 2018-2021 Polyaxon, Inc.
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

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.9.0
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1EventKind(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    allowed enum values
    """
    RUN_STATUS_CREATED = "run_status_created"
    RUN_STATUS_RESUMING = "run_status_resuming"
    RUN_STATUS_COMPILED = "run_status_compiled"
    RUN_STATUS_ON_SCHEDULE = "run_status_on_schedule"
    RUN_STATUS_QUEUED = "run_status_queued"
    RUN_STATUS_SCHEDULED = "run_status_scheduled"
    RUN_STATUS_AWAITING_CACHE = "run_status_awaiting_cache"
    RUN_STATUS_STARTING = "run_status_starting"
    RUN_STATUS_RUNNING = "run_status_running"
    RUN_STATUS_PROCESSING = "run_status_processing"
    RUN_STATUS_STOPPING = "run_status_stopping"
    RUN_STATUS_FAILED = "run_status_failed"
    RUN_STATUS_STOPPED = "run_status_stopped"
    RUN_STATUS_SUCCEEDED = "run_status_succeeded"
    RUN_STATUS_SKIPPED = "run_status_skipped"
    RUN_STATUS_WARNING = "run_status_warning"
    RUN_STATUS_UNSCHEDULABLE = "run_status_unschedulable"
    RUN_STATUS_UPSTREAM_FAILED = "run_status_upstream_failed"
    RUN_STATUS_RETRYING = "run_status_retrying"
    RUN_STATUS_UNKNOWN = "run_status_unknown"
    RUN_STATUS_DONE = "run_status_done"
    RUN_APPROVED_ACTOR = "run_approved_actor"
    RUN_INVALIDATED_ACTOR = "run_invalidated_actor"
    RUN_NEW_ARTIFACTS = "run_new_artifacts"
    CONNECTION_GIT_COMMIT = "connection_git_commit"
    CONNECTION_DATASET_VERSION = "connection_dataset_version"
    CONNECTION_REGISTRY_IMAGE = "connection_registry_image"
    ALERT_INFO = "alert_info"
    ALERT_WARNING = "alert_warning"
    ALERT_CRITICAL = "alert_critical"
    MODEL_VERSION_NEW_METRIC = "model_version_new_metric"
    PROJECT_CUSTOM_EVENT = "project_custom_event"
    ORG_CUSTOM_EVENT = "org_custom_event"

    allowable_values = [RUN_STATUS_CREATED, RUN_STATUS_RESUMING, RUN_STATUS_COMPILED, RUN_STATUS_ON_SCHEDULE, RUN_STATUS_QUEUED, RUN_STATUS_SCHEDULED, RUN_STATUS_AWAITING_CACHE, RUN_STATUS_STARTING, RUN_STATUS_RUNNING, RUN_STATUS_PROCESSING, RUN_STATUS_STOPPING, RUN_STATUS_FAILED, RUN_STATUS_STOPPED, RUN_STATUS_SUCCEEDED, RUN_STATUS_SKIPPED, RUN_STATUS_WARNING, RUN_STATUS_UNSCHEDULABLE, RUN_STATUS_UPSTREAM_FAILED, RUN_STATUS_RETRYING, RUN_STATUS_UNKNOWN, RUN_STATUS_DONE, RUN_APPROVED_ACTOR, RUN_INVALIDATED_ACTOR, RUN_NEW_ARTIFACTS, CONNECTION_GIT_COMMIT, CONNECTION_DATASET_VERSION, CONNECTION_REGISTRY_IMAGE, ALERT_INFO, ALERT_WARNING, ALERT_CRITICAL, MODEL_VERSION_NEW_METRIC, PROJECT_CUSTOM_EVENT, ORG_CUSTOM_EVENT]  # noqa: E501

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
    }

    attribute_map = {
    }

    def __init__(self, local_vars_configuration=None):  # noqa: E501
        """V1EventKind - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration
        self.discriminator = None

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1EventKind):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1EventKind):
            return True

        return self.to_dict() != other.to_dict()
