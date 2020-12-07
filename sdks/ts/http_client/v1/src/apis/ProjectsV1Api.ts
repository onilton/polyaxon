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

/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1ListBookmarksResponse,
    V1ListBookmarksResponseFromJSON,
    V1ListBookmarksResponseToJSON,
    V1ListProjectsResponse,
    V1ListProjectsResponseFromJSON,
    V1ListProjectsResponseToJSON,
    V1Project,
    V1ProjectFromJSON,
    V1ProjectToJSON,
    V1ProjectSettings,
    V1ProjectSettingsFromJSON,
    V1ProjectSettingsToJSON,
} from '../models';

export interface ArchiveProjectRequest {
    owner: string;
    name: string;
}

export interface BookmarkProjectRequest {
    owner: string;
    name: string;
}

export interface CreateProjectRequest {
    owner: string;
    body: V1Project;
}

export interface DeleteProjectRequest {
    owner: string;
    name: string;
}

export interface DisableProjectCIRequest {
    owner: string;
    name: string;
}

export interface EnableProjectCIRequest {
    owner: string;
    name: string;
}

export interface GetProjectRequest {
    owner: string;
    name: string;
}

export interface GetProjectSettingsRequest {
    owner: string;
    name: string;
}

export interface ListArchivedProjectsRequest {
    user: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListBookmarkedProjectsRequest {
    user: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListProjectNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListProjectsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchProjectRequest {
    owner: string;
    projectName: string;
    body: V1Project;
}

export interface PatchProjectSettingsRequest {
    owner: string;
    project: string;
    body: V1ProjectSettings;
}

export interface RestoreProjectRequest {
    owner: string;
    name: string;
}

export interface UnbookmarkProjectRequest {
    owner: string;
    name: string;
}

export interface UpdateProjectRequest {
    owner: string;
    projectName: string;
    body: V1Project;
}

export interface UpdateProjectSettingsRequest {
    owner: string;
    project: string;
    body: V1ProjectSettings;
}

export interface UploadProjectArtifactRequest {
    owner: string;
    project: string;
    uuid: string;
    uploadfile: Blob;
    path?: string;
    overwrite?: boolean;
}

/**
 * 
 */
export class ProjectsV1Api extends runtime.BaseAPI {

    /**
     * Archive project
     */
    async archiveProjectRaw(requestParameters: ArchiveProjectRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling archiveProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling archiveProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/archive`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive project
     */
    async archiveProject(requestParameters: ArchiveProjectRequest): Promise<void> {
        await this.archiveProjectRaw(requestParameters);
    }

    /**
     * Bookmark project
     */
    async bookmarkProjectRaw(requestParameters: BookmarkProjectRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling bookmarkProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling bookmarkProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/bookmark`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bookmark project
     */
    async bookmarkProject(requestParameters: BookmarkProjectRequest): Promise<void> {
        await this.bookmarkProjectRaw(requestParameters);
    }

    /**
     * Create new project
     */
    async createProjectRaw(requestParameters: CreateProjectRequest): Promise<runtime.ApiResponse<V1Project>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createProject.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/projects/create`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1ProjectToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectFromJSON(jsonValue));
    }

    /**
     * Create new project
     */
    async createProject(requestParameters: CreateProjectRequest): Promise<V1Project> {
        const response = await this.createProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete project
     */
    async deleteProjectRaw(requestParameters: DeleteProjectRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete project
     */
    async deleteProject(requestParameters: DeleteProjectRequest): Promise<void> {
        await this.deleteProjectRaw(requestParameters);
    }

    /**
     * Disbale project CI
     */
    async disableProjectCIRaw(requestParameters: DisableProjectCIRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling disableProjectCI.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling disableProjectCI.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/ci`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Disbale project CI
     */
    async disableProjectCI(requestParameters: DisableProjectCIRequest): Promise<void> {
        await this.disableProjectCIRaw(requestParameters);
    }

    /**
     * Enable project CI
     */
    async enableProjectCIRaw(requestParameters: EnableProjectCIRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling enableProjectCI.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling enableProjectCI.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/ci`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Enable project CI
     */
    async enableProjectCI(requestParameters: EnableProjectCIRequest): Promise<void> {
        await this.enableProjectCIRaw(requestParameters);
    }

    /**
     * Get project
     */
    async getProjectRaw(requestParameters: GetProjectRequest): Promise<runtime.ApiResponse<V1Project>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectFromJSON(jsonValue));
    }

    /**
     * Get project
     */
    async getProject(requestParameters: GetProjectRequest): Promise<V1Project> {
        const response = await this.getProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Project settings
     */
    async getProjectSettingsRaw(requestParameters: GetProjectSettingsRequest): Promise<runtime.ApiResponse<V1ProjectSettings>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getProjectSettings.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getProjectSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectSettingsFromJSON(jsonValue));
    }

    /**
     * Get Project settings
     */
    async getProjectSettings(requestParameters: GetProjectSettingsRequest): Promise<V1ProjectSettings> {
        const response = await this.getProjectSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List archived projects for user
     */
    async listArchivedProjectsRaw(requestParameters: ListArchivedProjectsRequest): Promise<runtime.ApiResponse<V1ListProjectsResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling listArchivedProjects.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/archives/{user}/projects`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListProjectsResponseFromJSON(jsonValue));
    }

    /**
     * List archived projects for user
     */
    async listArchivedProjects(requestParameters: ListArchivedProjectsRequest): Promise<V1ListProjectsResponse> {
        const response = await this.listArchivedProjectsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List bookmarked projects for user
     */
    async listBookmarkedProjectsRaw(requestParameters: ListBookmarkedProjectsRequest): Promise<runtime.ApiResponse<V1ListBookmarksResponse>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling listBookmarkedProjects.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/bookmarks/{user}/projects`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListBookmarksResponseFromJSON(jsonValue));
    }

    /**
     * List bookmarked projects for user
     */
    async listBookmarkedProjects(requestParameters: ListBookmarkedProjectsRequest): Promise<V1ListBookmarksResponse> {
        const response = await this.listBookmarkedProjectsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List project names
     */
    async listProjectNamesRaw(requestParameters: ListProjectNamesRequest): Promise<runtime.ApiResponse<V1ListProjectsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjectNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/projects/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListProjectsResponseFromJSON(jsonValue));
    }

    /**
     * List project names
     */
    async listProjectNames(requestParameters: ListProjectNamesRequest): Promise<V1ListProjectsResponse> {
        const response = await this.listProjectNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List projects
     */
    async listProjectsRaw(requestParameters: ListProjectsRequest): Promise<runtime.ApiResponse<V1ListProjectsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listProjects.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/projects/list`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListProjectsResponseFromJSON(jsonValue));
    }

    /**
     * List projects
     */
    async listProjects(requestParameters: ListProjectsRequest): Promise<V1ListProjectsResponse> {
        const response = await this.listProjectsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch project
     */
    async patchProjectRaw(requestParameters: PatchProjectRequest): Promise<runtime.ApiResponse<V1Project>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchProject.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling patchProject.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project.name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project.name"}}`, encodeURIComponent(String(requestParameters.projectName))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1ProjectToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectFromJSON(jsonValue));
    }

    /**
     * Patch project
     */
    async patchProject(requestParameters: PatchProjectRequest): Promise<V1Project> {
        const response = await this.patchProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch project settings
     */
    async patchProjectSettingsRaw(requestParameters: PatchProjectSettingsRequest): Promise<runtime.ApiResponse<V1ProjectSettings>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchProjectSettings.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling patchProjectSettings.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProjectSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1ProjectSettingsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectSettingsFromJSON(jsonValue));
    }

    /**
     * Patch project settings
     */
    async patchProjectSettings(requestParameters: PatchProjectSettingsRequest): Promise<V1ProjectSettings> {
        const response = await this.patchProjectSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Restore project
     */
    async restoreProjectRaw(requestParameters: RestoreProjectRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling restoreProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling restoreProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/restore`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Restore project
     */
    async restoreProject(requestParameters: RestoreProjectRequest): Promise<void> {
        await this.restoreProjectRaw(requestParameters);
    }

    /**
     * Unbookmark project
     */
    async unbookmarkProjectRaw(requestParameters: UnbookmarkProjectRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling unbookmarkProject.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling unbookmarkProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{name}/unbookmark`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unbookmark project
     */
    async unbookmarkProject(requestParameters: UnbookmarkProjectRequest): Promise<void> {
        await this.unbookmarkProjectRaw(requestParameters);
    }

    /**
     * Update project
     */
    async updateProjectRaw(requestParameters: UpdateProjectRequest): Promise<runtime.ApiResponse<V1Project>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateProject.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling updateProject.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project.name}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project.name"}}`, encodeURIComponent(String(requestParameters.projectName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1ProjectToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectFromJSON(jsonValue));
    }

    /**
     * Update project
     */
    async updateProject(requestParameters: UpdateProjectRequest): Promise<V1Project> {
        const response = await this.updateProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update project settings
     */
    async updateProjectSettingsRaw(requestParameters: UpdateProjectSettingsRequest): Promise<runtime.ApiResponse<V1ProjectSettings>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateProjectSettings.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling updateProjectSettings.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateProjectSettings.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/settings`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1ProjectSettingsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProjectSettingsFromJSON(jsonValue));
    }

    /**
     * Update project settings
     */
    async updateProjectSettings(requestParameters: UpdateProjectSettingsRequest): Promise<V1ProjectSettings> {
        const response = await this.updateProjectSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Upload artifact to a store via project access
     */
    async uploadProjectArtifactRaw(requestParameters: UploadProjectArtifactRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling uploadProjectArtifact.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling uploadProjectArtifact.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling uploadProjectArtifact.');
        }

        if (requestParameters.uploadfile === null || requestParameters.uploadfile === undefined) {
            throw new runtime.RequiredError('uploadfile','Required parameter requestParameters.uploadfile was null or undefined when calling uploadProjectArtifact.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.path !== undefined) {
            queryParameters['path'] = requestParameters.path;
        }

        if (requestParameters.overwrite !== undefined) {
            queryParameters['overwrite'] = requestParameters.overwrite;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.uploadfile !== undefined) {
            formParams.append('uploadfile', requestParameters.uploadfile as any);
        }

        const response = await this.request({
            path: `/api/v1/{owner}/{project}/artifacts/{uuid}/upload`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"project"}}`, encodeURIComponent(String(requestParameters.project))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload artifact to a store via project access
     */
    async uploadProjectArtifact(requestParameters: UploadProjectArtifactRequest): Promise<void> {
        await this.uploadProjectArtifactRaw(requestParameters);
    }

}
