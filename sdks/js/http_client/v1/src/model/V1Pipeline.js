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
 * The version of the OpenAPI document: 1.3.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1PipelineKind from './V1PipelineKind';

/**
 * The V1Pipeline model module.
 * @module model/V1Pipeline
 * @version 1.3.0
 */
class V1Pipeline {
    /**
     * Constructs a new <code>V1Pipeline</code>.
     * @alias module:model/V1Pipeline
     */
    constructor() { 
        
        V1Pipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Pipeline} obj Optional instance to populate.
     * @return {module:model/V1Pipeline} The populated <code>V1Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Pipeline();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1PipelineKind.constructFromObject(data['kind']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
V1Pipeline.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1Pipeline.prototype['name'] = undefined;

/**
 * @member {module:model/V1PipelineKind} kind
 */
V1Pipeline.prototype['kind'] = undefined;






export default V1Pipeline;

