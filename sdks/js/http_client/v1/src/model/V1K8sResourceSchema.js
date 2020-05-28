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
 * The V1K8sResourceSchema model module.
 * @module model/V1K8sResourceSchema
 * @version 1.0.93
 */
class V1K8sResourceSchema {
    /**
     * Constructs a new <code>V1K8sResourceSchema</code>.
     * @alias module:model/V1K8sResourceSchema
     */
    constructor() { 
        
        V1K8sResourceSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1K8sResourceSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1K8sResourceSchema} obj Optional instance to populate.
     * @return {module:model/V1K8sResourceSchema} The populated <code>V1K8sResourceSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1K8sResourceSchema();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mount_path')) {
                obj['mount_path'] = ApiClient.convertToType(data['mount_path'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
V1K8sResourceSchema.prototype['name'] = undefined;

/**
 * @member {String} mount_path
 */
V1K8sResourceSchema.prototype['mount_path'] = undefined;

/**
 * @member {Array.<String>} items
 */
V1K8sResourceSchema.prototype['items'] = undefined;






export default V1K8sResourceSchema;

