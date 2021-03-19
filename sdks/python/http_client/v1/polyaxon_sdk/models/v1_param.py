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

    The version of the OpenAPI document: 1.7.4
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1Param(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'value': 'object',
        'ref': 'str',
        'connection': 'str',
        'to_init': 'bool',
        'context_only': 'bool'
    }

    attribute_map = {
        'value': 'value',
        'ref': 'ref',
        'connection': 'connection',
        'to_init': 'toInit',
        'context_only': 'contextOnly'
    }

    def __init__(self, value=None, ref=None, connection=None, to_init=None, context_only=None, local_vars_configuration=None):  # noqa: E501
        """V1Param - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._value = None
        self._ref = None
        self._connection = None
        self._to_init = None
        self._context_only = None
        self.discriminator = None

        if value is not None:
            self.value = value
        if ref is not None:
            self.ref = ref
        if connection is not None:
            self.connection = connection
        if to_init is not None:
            self.to_init = to_init
        if context_only is not None:
            self.context_only = context_only

    @property
    def value(self):
        """Gets the value of this V1Param.  # noqa: E501


        :return: The value of this V1Param.  # noqa: E501
        :rtype: object
        """
        return self._value

    @value.setter
    def value(self, value):
        """Sets the value of this V1Param.


        :param value: The value of this V1Param.  # noqa: E501
        :type: object
        """

        self._value = value

    @property
    def ref(self):
        """Gets the ref of this V1Param.  # noqa: E501


        :return: The ref of this V1Param.  # noqa: E501
        :rtype: str
        """
        return self._ref

    @ref.setter
    def ref(self, ref):
        """Sets the ref of this V1Param.


        :param ref: The ref of this V1Param.  # noqa: E501
        :type: str
        """

        self._ref = ref

    @property
    def connection(self):
        """Gets the connection of this V1Param.  # noqa: E501


        :return: The connection of this V1Param.  # noqa: E501
        :rtype: str
        """
        return self._connection

    @connection.setter
    def connection(self, connection):
        """Sets the connection of this V1Param.


        :param connection: The connection of this V1Param.  # noqa: E501
        :type: str
        """

        self._connection = connection

    @property
    def to_init(self):
        """Gets the to_init of this V1Param.  # noqa: E501


        :return: The to_init of this V1Param.  # noqa: E501
        :rtype: bool
        """
        return self._to_init

    @to_init.setter
    def to_init(self, to_init):
        """Sets the to_init of this V1Param.


        :param to_init: The to_init of this V1Param.  # noqa: E501
        :type: bool
        """

        self._to_init = to_init

    @property
    def context_only(self):
        """Gets the context_only of this V1Param.  # noqa: E501


        :return: The context_only of this V1Param.  # noqa: E501
        :rtype: bool
        """
        return self._context_only

    @context_only.setter
    def context_only(self, context_only):
        """Sets the context_only of this V1Param.


        :param context_only: The context_only of this V1Param.  # noqa: E501
        :type: bool
        """

        self._context_only = context_only

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
        if not isinstance(other, V1Param):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Param):
            return True

        return self.to_dict() != other.to_dict()
