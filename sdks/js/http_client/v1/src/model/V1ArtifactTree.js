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
 * The V1ArtifactTree model module.
 * @module model/V1ArtifactTree
 * @version 1.4.0
 */
class V1ArtifactTree {
    /**
     * Constructs a new <code>V1ArtifactTree</code>.
     * @alias module:model/V1ArtifactTree
     */
    constructor() { 
        
        V1ArtifactTree.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ArtifactTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ArtifactTree} obj Optional instance to populate.
     * @return {module:model/V1ArtifactTree} The populated <code>V1ArtifactTree</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ArtifactTree();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], {'String': 'String'});
            }
            if (data.hasOwnProperty('dirs')) {
                obj['dirs'] = ApiClient.convertToType(data['dirs'], ['String']);
            }
            if (data.hasOwnProperty('is_done')) {
                obj['is_done'] = ApiClient.convertToType(data['is_done'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} files
 */
V1ArtifactTree.prototype['files'] = undefined;

/**
 * @member {Array.<String>} dirs
 */
V1ArtifactTree.prototype['dirs'] = undefined;

/**
 * @member {Boolean} is_done
 */
V1ArtifactTree.prototype['is_done'] = undefined;






export default V1ArtifactTree;

