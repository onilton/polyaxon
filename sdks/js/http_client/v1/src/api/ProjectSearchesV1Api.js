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


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListSearchesResponse from '../model/V1ListSearchesResponse';
import V1Search from '../model/V1Search';

/**
* ProjectSearchesV1 service.
* @module api/ProjectSearchesV1Api
* @version 1.0.93
*/
export default class ProjectSearchesV1Api {

    /**
    * Constructs a new ProjectSearchesV1Api. 
    * Polyaxon sdk
    * @alias module:api/ProjectSearchesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~createProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~createProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    createProjectSearch(owner, project, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling createProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~deleteProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ProjectSearchesV1Api~deleteProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProjectSearch(owner, project, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling deleteProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~getProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ProjectSearchesV1Api~getProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    getProjectSearch(owner, project, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling getProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectSearchNames operation.
     * @callback module:api/ProjectSearchesV1Api~listProjectSearchNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project search names
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/ProjectSearchesV1Api~listProjectSearchNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listProjectSearchNames(owner, project, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectSearchNames");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling listProjectSearchNames");
      }

      let pathParams = {
        'owner': owner,
        'project': project
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProjectSearches operation.
     * @callback module:api/ProjectSearchesV1Api~listProjectSearchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSearchesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List project searches
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/ProjectSearchesV1Api~listProjectSearchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSearchesResponse}
     */
    listProjectSearches(owner, project, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listProjectSearches");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling listProjectSearches");
      }

      let pathParams = {
        'owner': owner,
        'project': project
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListSearchesResponse;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~patchProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~patchProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    patchProjectSearch(owner, project, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling patchProjectSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling patchProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'search.uuid': search_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{search.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the promoteProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~promoteProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Promote project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/ProjectSearchesV1Api~promoteProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    promoteProjectSearch(owner, project, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling promoteProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling promoteProjectSearch");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling promoteProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{uuid}/promote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProjectSearch operation.
     * @callback module:api/ProjectSearchesV1Api~updateProjectSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Search} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project search
     * @param {String} owner Owner of the namespace
     * @param {String} project Project under namesapce
     * @param {String} search_uuid UUID
     * @param {module:model/V1Search} body Search body
     * @param {module:api/ProjectSearchesV1Api~updateProjectSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Search}
     */
    updateProjectSearch(owner, project, search_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateProjectSearch");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling updateProjectSearch");
      }
      // verify the required parameter 'search_uuid' is set
      if (search_uuid === undefined || search_uuid === null) {
        throw new Error("Missing the required parameter 'search_uuid' when calling updateProjectSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProjectSearch");
      }

      let pathParams = {
        'owner': owner,
        'project': project,
        'search.uuid': search_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Search;
      return this.apiClient.callApi(
        '/api/v1/{owner}/{project}/searches/{search.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
