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
 * The V1PolyaxonInitContainer model module.
 * @module model/V1PolyaxonInitContainer
 * @version 1.4.0
 */
class V1PolyaxonInitContainer {
    /**
     * Constructs a new <code>V1PolyaxonInitContainer</code>.
     * @alias module:model/V1PolyaxonInitContainer
     */
    constructor() { 
        
        V1PolyaxonInitContainer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PolyaxonInitContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PolyaxonInitContainer} obj Optional instance to populate.
     * @return {module:model/V1PolyaxonInitContainer} The populated <code>V1PolyaxonInitContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PolyaxonInitContainer();

            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('image_tag')) {
                obj['image_tag'] = ApiClient.convertToType(data['image_tag'], 'String');
            }
            if (data.hasOwnProperty('image_pull_policy')) {
                obj['image_pull_policy'] = ApiClient.convertToType(data['image_pull_policy'], 'String');
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} image
 */
V1PolyaxonInitContainer.prototype['image'] = undefined;

/**
 * @member {String} image_tag
 */
V1PolyaxonInitContainer.prototype['image_tag'] = undefined;

/**
 * @member {String} image_pull_policy
 */
V1PolyaxonInitContainer.prototype['image_pull_policy'] = undefined;

/**
 * @member {Object} resources
 */
V1PolyaxonInitContainer.prototype['resources'] = undefined;






export default V1PolyaxonInitContainer;

