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
 * The version of the OpenAPI document: 1.9.0
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
 * @interface V1EventVideo
 */
export interface V1EventVideo {
    /**
     * Height of the video.
     * @type {number}
     * @memberof V1EventVideo
     */
    height?: number;
    /**
     * Width of the video.
     * @type {number}
     * @memberof V1EventVideo
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof V1EventVideo
     */
    colorspace?: number;
    /**
     * 
     * @type {string}
     * @memberof V1EventVideo
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EventVideo
     */
    content_type?: string;
}

export function V1EventVideoFromJSON(json: any): V1EventVideo {
    return V1EventVideoFromJSONTyped(json, false);
}

export function V1EventVideoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventVideo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'colorspace': !exists(json, 'colorspace') ? undefined : json['colorspace'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
    };
}

export function V1EventVideoToJSON(value?: V1EventVideo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'width': value.width,
        'colorspace': value.colorspace,
        'path': value.path,
        'content_type': value.content_type,
    };
}


