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

// Code generated by go-swagger; DO NOT EDIT.

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new projects v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for projects v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientService is the interface for Client methods
type ClientService interface {
	ArchiveProject(params *ArchiveProjectParams, authInfo runtime.ClientAuthInfoWriter) (*ArchiveProjectOK, *ArchiveProjectNoContent, error)

	BookmarkProject(params *BookmarkProjectParams, authInfo runtime.ClientAuthInfoWriter) (*BookmarkProjectOK, *BookmarkProjectNoContent, error)

	CreateProject(params *CreateProjectParams, authInfo runtime.ClientAuthInfoWriter) (*CreateProjectOK, *CreateProjectNoContent, error)

	DeleteProject(params *DeleteProjectParams, authInfo runtime.ClientAuthInfoWriter) (*DeleteProjectOK, *DeleteProjectNoContent, error)

	DisableProjectCI(params *DisableProjectCIParams, authInfo runtime.ClientAuthInfoWriter) (*DisableProjectCIOK, *DisableProjectCINoContent, error)

	EnableProjectCI(params *EnableProjectCIParams, authInfo runtime.ClientAuthInfoWriter) (*EnableProjectCIOK, *EnableProjectCINoContent, error)

	GetProject(params *GetProjectParams, authInfo runtime.ClientAuthInfoWriter) (*GetProjectOK, *GetProjectNoContent, error)

	GetProjectSettings(params *GetProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*GetProjectSettingsOK, *GetProjectSettingsNoContent, error)

	ListArchivedProjects(params *ListArchivedProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListArchivedProjectsOK, *ListArchivedProjectsNoContent, error)

	ListBookmarkedProjects(params *ListBookmarkedProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListBookmarkedProjectsOK, *ListBookmarkedProjectsNoContent, error)

	ListProjectNames(params *ListProjectNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListProjectNamesOK, *ListProjectNamesNoContent, error)

	ListProjects(params *ListProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListProjectsOK, *ListProjectsNoContent, error)

	PatchProject(params *PatchProjectParams, authInfo runtime.ClientAuthInfoWriter) (*PatchProjectOK, *PatchProjectNoContent, error)

	PatchProjectSettings(params *PatchProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*PatchProjectSettingsOK, *PatchProjectSettingsNoContent, error)

	RestoreProject(params *RestoreProjectParams, authInfo runtime.ClientAuthInfoWriter) (*RestoreProjectOK, *RestoreProjectNoContent, error)

	UnbookmarkProject(params *UnbookmarkProjectParams, authInfo runtime.ClientAuthInfoWriter) (*UnbookmarkProjectOK, *UnbookmarkProjectNoContent, error)

	UpdateProject(params *UpdateProjectParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateProjectOK, *UpdateProjectNoContent, error)

	UpdateProjectSettings(params *UpdateProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateProjectSettingsOK, *UpdateProjectSettingsNoContent, error)

	UploadProjectArtifact(params *UploadProjectArtifactParams, authInfo runtime.ClientAuthInfoWriter) (*UploadProjectArtifactOK, *UploadProjectArtifactNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  ArchiveProject archives project
*/
func (a *Client) ArchiveProject(params *ArchiveProjectParams, authInfo runtime.ClientAuthInfoWriter) (*ArchiveProjectOK, *ArchiveProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewArchiveProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ArchiveProject",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{name}/archive",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ArchiveProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ArchiveProjectOK:
		return value, nil, nil
	case *ArchiveProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ArchiveProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  BookmarkProject bookmarks project
*/
func (a *Client) BookmarkProject(params *BookmarkProjectParams, authInfo runtime.ClientAuthInfoWriter) (*BookmarkProjectOK, *BookmarkProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewBookmarkProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "BookmarkProject",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{name}/bookmark",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &BookmarkProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *BookmarkProjectOK:
		return value, nil, nil
	case *BookmarkProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*BookmarkProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  CreateProject creates new project
*/
func (a *Client) CreateProject(params *CreateProjectParams, authInfo runtime.ClientAuthInfoWriter) (*CreateProjectOK, *CreateProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "CreateProject",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/projects/create",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *CreateProjectOK:
		return value, nil, nil
	case *CreateProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteProject deletes project
*/
func (a *Client) DeleteProject(params *DeleteProjectParams, authInfo runtime.ClientAuthInfoWriter) (*DeleteProjectOK, *DeleteProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "DeleteProject",
		Method:             "DELETE",
		PathPattern:        "/api/v1/{owner}/{name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *DeleteProjectOK:
		return value, nil, nil
	case *DeleteProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DisableProjectCI disbales project c i
*/
func (a *Client) DisableProjectCI(params *DisableProjectCIParams, authInfo runtime.ClientAuthInfoWriter) (*DisableProjectCIOK, *DisableProjectCINoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDisableProjectCIParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "DisableProjectCI",
		Method:             "DELETE",
		PathPattern:        "/api/v1/{owner}/{name}/ci",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DisableProjectCIReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *DisableProjectCIOK:
		return value, nil, nil
	case *DisableProjectCINoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DisableProjectCIDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  EnableProjectCI enables project c i
*/
func (a *Client) EnableProjectCI(params *EnableProjectCIParams, authInfo runtime.ClientAuthInfoWriter) (*EnableProjectCIOK, *EnableProjectCINoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEnableProjectCIParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "EnableProjectCI",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{name}/ci",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &EnableProjectCIReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *EnableProjectCIOK:
		return value, nil, nil
	case *EnableProjectCINoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EnableProjectCIDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetProject gets project
*/
func (a *Client) GetProject(params *GetProjectParams, authInfo runtime.ClientAuthInfoWriter) (*GetProjectOK, *GetProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "GetProject",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/{name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetProjectOK:
		return value, nil, nil
	case *GetProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetProjectSettings gets project settings
*/
func (a *Client) GetProjectSettings(params *GetProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*GetProjectSettingsOK, *GetProjectSettingsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetProjectSettingsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "GetProjectSettings",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/{name}/settings",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetProjectSettingsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetProjectSettingsOK:
		return value, nil, nil
	case *GetProjectSettingsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetProjectSettingsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListArchivedProjects lists archived projects for user
*/
func (a *Client) ListArchivedProjects(params *ListArchivedProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListArchivedProjectsOK, *ListArchivedProjectsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListArchivedProjectsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListArchivedProjects",
		Method:             "GET",
		PathPattern:        "/api/v1/archives/{user}/projects",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListArchivedProjectsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListArchivedProjectsOK:
		return value, nil, nil
	case *ListArchivedProjectsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListArchivedProjectsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListBookmarkedProjects lists bookmarked projects for user
*/
func (a *Client) ListBookmarkedProjects(params *ListBookmarkedProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListBookmarkedProjectsOK, *ListBookmarkedProjectsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListBookmarkedProjectsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListBookmarkedProjects",
		Method:             "GET",
		PathPattern:        "/api/v1/bookmarks/{user}/projects",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListBookmarkedProjectsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListBookmarkedProjectsOK:
		return value, nil, nil
	case *ListBookmarkedProjectsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListBookmarkedProjectsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListProjectNames lists project names
*/
func (a *Client) ListProjectNames(params *ListProjectNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListProjectNamesOK, *ListProjectNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListProjectNamesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListProjectNames",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/projects/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListProjectNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListProjectNamesOK:
		return value, nil, nil
	case *ListProjectNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListProjectNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListProjects lists projects
*/
func (a *Client) ListProjects(params *ListProjectsParams, authInfo runtime.ClientAuthInfoWriter) (*ListProjectsOK, *ListProjectsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListProjectsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListProjects",
		Method:             "GET",
		PathPattern:        "/api/v1/{owner}/projects/list",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListProjectsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListProjectsOK:
		return value, nil, nil
	case *ListProjectsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListProjectsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchProject patches project
*/
func (a *Client) PatchProject(params *PatchProjectParams, authInfo runtime.ClientAuthInfoWriter) (*PatchProjectOK, *PatchProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "PatchProject",
		Method:             "PATCH",
		PathPattern:        "/api/v1/{owner}/{project.name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchProjectOK:
		return value, nil, nil
	case *PatchProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchProjectSettings patches project settings
*/
func (a *Client) PatchProjectSettings(params *PatchProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*PatchProjectSettingsOK, *PatchProjectSettingsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchProjectSettingsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "PatchProjectSettings",
		Method:             "PATCH",
		PathPattern:        "/api/v1/{owner}/{project}/settings",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchProjectSettingsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchProjectSettingsOK:
		return value, nil, nil
	case *PatchProjectSettingsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchProjectSettingsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  RestoreProject restores project
*/
func (a *Client) RestoreProject(params *RestoreProjectParams, authInfo runtime.ClientAuthInfoWriter) (*RestoreProjectOK, *RestoreProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewRestoreProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "RestoreProject",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{name}/restore",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &RestoreProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *RestoreProjectOK:
		return value, nil, nil
	case *RestoreProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*RestoreProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UnbookmarkProject unbookmarks project
*/
func (a *Client) UnbookmarkProject(params *UnbookmarkProjectParams, authInfo runtime.ClientAuthInfoWriter) (*UnbookmarkProjectOK, *UnbookmarkProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUnbookmarkProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "UnbookmarkProject",
		Method:             "DELETE",
		PathPattern:        "/api/v1/{owner}/{name}/unbookmark",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UnbookmarkProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UnbookmarkProjectOK:
		return value, nil, nil
	case *UnbookmarkProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UnbookmarkProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateProject updates project
*/
func (a *Client) UpdateProject(params *UpdateProjectParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateProjectOK, *UpdateProjectNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateProjectParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "UpdateProject",
		Method:             "PUT",
		PathPattern:        "/api/v1/{owner}/{project.name}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateProjectReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdateProjectOK:
		return value, nil, nil
	case *UpdateProjectNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateProjectDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateProjectSettings updates project settings
*/
func (a *Client) UpdateProjectSettings(params *UpdateProjectSettingsParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateProjectSettingsOK, *UpdateProjectSettingsNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateProjectSettingsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "UpdateProjectSettings",
		Method:             "PUT",
		PathPattern:        "/api/v1/{owner}/{project}/settings",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateProjectSettingsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdateProjectSettingsOK:
		return value, nil, nil
	case *UpdateProjectSettingsNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateProjectSettingsDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UploadProjectArtifact uploads artifact to a store via project access
*/
func (a *Client) UploadProjectArtifact(params *UploadProjectArtifactParams, authInfo runtime.ClientAuthInfoWriter) (*UploadProjectArtifactOK, *UploadProjectArtifactNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUploadProjectArtifactParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "UploadProjectArtifact",
		Method:             "POST",
		PathPattern:        "/api/v1/{owner}/{project}/artifacts/{uuid}/upload",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"multipart/form-data"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UploadProjectArtifactReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UploadProjectArtifactOK:
		return value, nil, nil
	case *UploadProjectArtifactNoContent:
		return nil, value, nil
	}
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for projects_v1: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
