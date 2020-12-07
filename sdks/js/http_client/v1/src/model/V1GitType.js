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

/**
 * The V1GitType model module.
 * @module model/V1GitType
 * @version 1.4.0
 */
class V1GitType {
    /**
     * Constructs a new <code>V1GitType</code>.
     * @alias module:model/V1GitType
     */
    constructor() { 
        
        V1GitType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1GitType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1GitType} obj Optional instance to populate.
     * @return {module:model/V1GitType} The populated <code>V1GitType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1GitType();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Boolean');
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = ApiClient.convertToType(data['flags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
V1GitType.prototype['url'] = undefined;

/**
 * @member {Boolean} revision
 */
V1GitType.prototype['revision'] = undefined;

/**
 * @member {Array.<String>} flags
 */
V1GitType.prototype['flags'] = undefined;






export default V1GitType;

