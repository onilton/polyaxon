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

// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Init Artifacts initializer specification
//
// swagger:model v1Init
type V1Init struct {

	// Override Schema for artifacts/mounts connections
	Artifacts *V1ArtifactsType `json:"artifacts,omitempty"`

	// Optional, connection to use with this initializer
	Connection string `json:"connection,omitempty"`

	// Container to override
	Container V1Container `json:"container,omitempty"`

	// Schema of the dockerfile to init
	Dockerfile *V1DockerfileType `json:"dockerfile,omitempty"`

	// File intializer
	File *V1FileType `json:"file,omitempty"`

	// Override for git connections
	Git *V1GitType `json:"git,omitempty"`

	// Optional context path, the path to mount to main the container
	Path string `json:"path,omitempty"`
}

// Validate validates this v1 init
func (m *V1Init) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateArtifacts(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateDockerfile(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateFile(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateGit(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Init) validateArtifacts(formats strfmt.Registry) error {
	if swag.IsZero(m.Artifacts) { // not required
		return nil
	}

	if m.Artifacts != nil {
		if err := m.Artifacts.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifacts")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) validateDockerfile(formats strfmt.Registry) error {
	if swag.IsZero(m.Dockerfile) { // not required
		return nil
	}

	if m.Dockerfile != nil {
		if err := m.Dockerfile.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("dockerfile")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) validateFile(formats strfmt.Registry) error {
	if swag.IsZero(m.File) { // not required
		return nil
	}

	if m.File != nil {
		if err := m.File.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("file")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) validateGit(formats strfmt.Registry) error {
	if swag.IsZero(m.Git) { // not required
		return nil
	}

	if m.Git != nil {
		if err := m.Git.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("git")
			}
			return err
		}
	}

	return nil
}

// ContextValidate validate this v1 init based on the context it is used
func (m *V1Init) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateArtifacts(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateDockerfile(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateFile(ctx, formats); err != nil {
		res = append(res, err)
	}

	if err := m.contextValidateGit(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1Init) contextValidateArtifacts(ctx context.Context, formats strfmt.Registry) error {

	if m.Artifacts != nil {
		if err := m.Artifacts.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifacts")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) contextValidateDockerfile(ctx context.Context, formats strfmt.Registry) error {

	if m.Dockerfile != nil {
		if err := m.Dockerfile.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("dockerfile")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) contextValidateFile(ctx context.Context, formats strfmt.Registry) error {

	if m.File != nil {
		if err := m.File.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("file")
			}
			return err
		}
	}

	return nil
}

func (m *V1Init) contextValidateGit(ctx context.Context, formats strfmt.Registry) error {

	if m.Git != nil {
		if err := m.Git.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("git")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1Init) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Init) UnmarshalBinary(b []byte) error {
	var res V1Init
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
