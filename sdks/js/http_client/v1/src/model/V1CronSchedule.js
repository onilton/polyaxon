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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1CronSchedule model module.
 * @module model/V1CronSchedule
 * @version 1.0.93
 */
class V1CronSchedule {
    /**
     * Constructs a new <code>V1CronSchedule</code>.
     * @alias module:model/V1CronSchedule
     */
    constructor() { 
        
        V1CronSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1CronSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1CronSchedule} obj Optional instance to populate.
     * @return {module:model/V1CronSchedule} The populated <code>V1CronSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CronSchedule();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
            }
            if (data.hasOwnProperty('cron')) {
                obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
            }
            if (data.hasOwnProperty('depends_on_past')) {
                obj['depends_on_past'] = ApiClient.convertToType(data['depends_on_past'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} kind
 * @default 'cron'
 */
V1CronSchedule.prototype['kind'] = 'cron';

/**
 * @member {Date} start_at
 */
V1CronSchedule.prototype['start_at'] = undefined;

/**
 * @member {Date} end_at
 */
V1CronSchedule.prototype['end_at'] = undefined;

/**
 * @member {String} cron
 */
V1CronSchedule.prototype['cron'] = undefined;

/**
 * @member {Boolean} depends_on_past
 */
V1CronSchedule.prototype['depends_on_past'] = undefined;






export default V1CronSchedule;

