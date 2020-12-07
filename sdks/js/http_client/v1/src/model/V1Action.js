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
import V1Param from './V1Param';

/**
 * The V1Action model module.
 * @module model/V1Action
 * @version 1.4.0
 */
class V1Action {
    /**
     * Constructs a new <code>V1Action</code>.
     * @alias module:model/V1Action
     */
    constructor() { 
        
        V1Action.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Action} obj Optional instance to populate.
     * @return {module:model/V1Action} The populated <code>V1Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Action();

            if (data.hasOwnProperty('hub_ref')) {
                obj['hub_ref'] = ApiClient.convertToType(data['hub_ref'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('many')) {
                obj['many'] = ApiClient.convertToType(data['many'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
            if (data.hasOwnProperty('run_patch')) {
                obj['run_patch'] = ApiClient.convertToType(data['run_patch'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} hub_ref
 */
V1Action.prototype['hub_ref'] = undefined;

/**
 * @member {String} label
 */
V1Action.prototype['label'] = undefined;

/**
 * @member {String} many
 */
V1Action.prototype['many'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Action.prototype['params'] = undefined;

/**
 * @member {Object} run_patch
 */
V1Action.prototype['run_patch'] = undefined;






export default V1Action;

