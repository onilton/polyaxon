// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.93
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum V1SparkType {
    Java = 'java',
    Scala = 'scala',
    Python = 'python',
    R = 'r'
}

export function V1SparkTypeFromJSON(json: any): V1SparkType {
    return V1SparkTypeFromJSONTyped(json, false);
}

export function V1SparkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SparkType {
    return json as V1SparkType;
}

export function V1SparkTypeToJSON(value?: V1SparkType | null): any {
    return value as any;
}

