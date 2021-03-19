// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.7.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1SearchSpec
 */
export interface V1SearchSpec {
    /**
     * 
     * @type {string}
     * @memberof V1SearchSpec
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof V1SearchSpec
     */
    sort?: string;
    /**
     * 
     * @type {number}
     * @memberof V1SearchSpec
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof V1SearchSpec
     */
    groupby?: string;
    /**
     * 
     * @type {string}
     * @memberof V1SearchSpec
     */
    columns?: string;
    /**
     * 
     * @type {string}
     * @memberof V1SearchSpec
     */
    pins?: string;
}

export function V1SearchSpecFromJSON(json: any): V1SearchSpec {
    return V1SearchSpecFromJSONTyped(json, false);
}

export function V1SearchSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SearchSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'query': !exists(json, 'query') ? undefined : json['query'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'groupby': !exists(json, 'groupby') ? undefined : json['groupby'],
        'columns': !exists(json, 'columns') ? undefined : json['columns'],
        'pins': !exists(json, 'pins') ? undefined : json['pins'],
    };
}

export function V1SearchSpecToJSON(value?: V1SearchSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'query': value.query,
        'sort': value.sort,
        'limit': value.limit,
        'groupby': value.groupby,
        'columns': value.columns,
        'pins': value.pins,
    };
}


