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
 * The version of the OpenAPI document: 1.4.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DashboardView from './DashboardView';

/**
 * The V1Dashboard model module.
 * @module model/V1Dashboard
 * @version 1.4.0
 */
class V1Dashboard {
    /**
     * Constructs a new <code>V1Dashboard</code>.
     * @alias module:model/V1Dashboard
     */
    constructor() { 
        
        V1Dashboard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Dashboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Dashboard} obj Optional instance to populate.
     * @return {module:model/V1Dashboard} The populated <code>V1Dashboard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Dashboard();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('view')) {
                obj['view'] = DashboardView.constructFromObject(data['view']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = ApiClient.convertToType(data['spec'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
V1Dashboard.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Dashboard.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Dashboard.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Dashboard.prototype['tags'] = undefined;

/**
 * @member {Number} live_state
 */
V1Dashboard.prototype['live_state'] = undefined;

/**
 * @member {module:model/DashboardView} view
 */
V1Dashboard.prototype['view'] = undefined;

/**
 * @member {Object} spec
 */
V1Dashboard.prototype['spec'] = undefined;

/**
 * @member {Date} created_at
 */
V1Dashboard.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1Dashboard.prototype['updated_at'] = undefined;






export default V1Dashboard;

