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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// V1ComponentHub component hub specification
//
// swagger:model v1ComponentHub
type V1ComponentHub struct {

	// Optional if this entity was bookmarked
	Bookmarked bool `json:"bookmarked,omitempty"`

	// Optional time when the entity was created
	// Format: date-time
	CreatedAt strfmt.DateTime `json:"created_at,omitempty"`

	// Optional description
	Description string `json:"description,omitempty"`

	// Optional flag to tell if this project is public
	IsPublic bool `json:"is_public,omitempty"`

	// Current live state
	LiveState int32 `json:"live_state,omitempty"`

	// Optional component name, should be a valid fully qualified value: name[:version]
	Name string `json:"name,omitempty"`

	// Owner/namespace where the component hub was created
	Owner string `json:"owner,omitempty"`

	// Markdown description/readme
	Readme string `json:"readme,omitempty"`

	// Current user's role in this (org/teams)/project
	Role string `json:"role,omitempty"`

	// Settings
	Settings *V1ComponentHubSettings `json:"settings,omitempty"`

	// Optional tags of this entity
	Tags []string `json:"tags"`

	// Optional last time the entity was updated
	// Format: date-time
	UpdatedAt strfmt.DateTime `json:"updated_at,omitempty"`

	// UUID
	UUID string `json:"uuid,omitempty"`
}

// Validate validates this v1 component hub
func (m *V1ComponentHub) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCreatedAt(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSettings(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateUpdatedAt(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1ComponentHub) validateCreatedAt(formats strfmt.Registry) error {

	if swag.IsZero(m.CreatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("created_at", "body", "date-time", m.CreatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

func (m *V1ComponentHub) validateSettings(formats strfmt.Registry) error {

	if swag.IsZero(m.Settings) { // not required
		return nil
	}

	if m.Settings != nil {
		if err := m.Settings.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("settings")
			}
			return err
		}
	}

	return nil
}

func (m *V1ComponentHub) validateUpdatedAt(formats strfmt.Registry) error {

	if swag.IsZero(m.UpdatedAt) { // not required
		return nil
	}

	if err := validate.FormatOf("updated_at", "body", "date-time", m.UpdatedAt.String(), formats); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1ComponentHub) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1ComponentHub) UnmarshalBinary(b []byte) error {
	var res V1ComponentHub
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
