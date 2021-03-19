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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.7.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Run from './V1Run';
import V1RunEdgeKind from './V1RunEdgeKind';
import V1Statuses from './V1Statuses';

/**
 * The V1RunEdge model module.
 * @module model/V1RunEdge
 * @version 1.7.4
 */
class V1RunEdge {
    /**
     * Constructs a new <code>V1RunEdge</code>.
     * @alias module:model/V1RunEdge
     */
    constructor() { 
        
        V1RunEdge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RunEdge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunEdge} obj Optional instance to populate.
     * @return {module:model/V1RunEdge} The populated <code>V1RunEdge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunEdge();

            if (data.hasOwnProperty('upstream')) {
                obj['upstream'] = V1Run.constructFromObject(data['upstream']);
            }
            if (data.hasOwnProperty('downstream')) {
                obj['downstream'] = V1Run.constructFromObject(data['downstream']);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = V1RunEdgeKind.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], Object);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], [V1Statuses]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1Run} upstream
 */
V1RunEdge.prototype['upstream'] = undefined;

/**
 * @member {module:model/V1Run} downstream
 */
V1RunEdge.prototype['downstream'] = undefined;

/**
 * @member {module:model/V1RunEdgeKind} kind
 */
V1RunEdge.prototype['kind'] = undefined;

/**
 * @member {Object} values
 */
V1RunEdge.prototype['values'] = undefined;

/**
 * @member {Array.<module:model/V1Statuses>} statuses
 */
V1RunEdge.prototype['statuses'] = undefined;






export default V1RunEdge;

