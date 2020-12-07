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
 * The version of the OpenAPI document: 1.4.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1Notification,
    V1NotificationFromJSON,
    V1NotificationFromJSONTyped,
    V1NotificationToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Plugins
 */
export interface V1Plugins {
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    auth?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    docker?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    shm?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    collect_artifacts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    collect_logs?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1Plugins
     */
    collect_resources?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    sync_statuses?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    auto_resume?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1Plugins
     */
    log_level?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1Plugins
     */
    externalHost?: boolean;
    /**
     * 
     * @type {Array<V1Notification>}
     * @memberof V1Plugins
     */
    notifications?: Array<V1Notification>;
}

export function V1PluginsFromJSON(json: any): V1Plugins {
    return V1PluginsFromJSONTyped(json, false);
}

export function V1PluginsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Plugins {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auth': !exists(json, 'auth') ? undefined : json['auth'],
        'docker': !exists(json, 'docker') ? undefined : json['docker'],
        'shm': !exists(json, 'shm') ? undefined : json['shm'],
        'collect_artifacts': !exists(json, 'collect_artifacts') ? undefined : json['collect_artifacts'],
        'collect_logs': !exists(json, 'collect_logs') ? undefined : json['collect_logs'],
        'collect_resources': !exists(json, 'collect_resources') ? undefined : json['collect_resources'],
        'sync_statuses': !exists(json, 'sync_statuses') ? undefined : json['sync_statuses'],
        'auto_resume': !exists(json, 'auto_resume') ? undefined : json['auto_resume'],
        'log_level': !exists(json, 'log_level') ? undefined : json['log_level'],
        'externalHost': !exists(json, 'externalHost') ? undefined : json['externalHost'],
        'notifications': !exists(json, 'notifications') ? undefined : ((json['notifications'] as Array<any>).map(V1NotificationFromJSON)),
    };
}

export function V1PluginsToJSON(value?: V1Plugins | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auth': value.auth,
        'docker': value.docker,
        'shm': value.shm,
        'collect_artifacts': value.collect_artifacts,
        'collect_logs': value.collect_logs,
        'collect_resources': value.collect_resources,
        'sync_statuses': value.sync_statuses,
        'auto_resume': value.auto_resume,
        'log_level': value.log_level,
        'externalHost': value.externalHost,
        'notifications': value.notifications === undefined ? undefined : ((value.notifications as Array<any>).map(V1NotificationToJSON)),
    };
}


