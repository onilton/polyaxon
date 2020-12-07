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

package component_hub_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewCreateComponentVersionStageParams creates a new CreateComponentVersionStageParams object
// with the default values initialized.
func NewCreateComponentVersionStageParams() *CreateComponentVersionStageParams {
	var ()
	return &CreateComponentVersionStageParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewCreateComponentVersionStageParamsWithTimeout creates a new CreateComponentVersionStageParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewCreateComponentVersionStageParamsWithTimeout(timeout time.Duration) *CreateComponentVersionStageParams {
	var ()
	return &CreateComponentVersionStageParams{

		timeout: timeout,
	}
}

// NewCreateComponentVersionStageParamsWithContext creates a new CreateComponentVersionStageParams object
// with the default values initialized, and the ability to set a context for a request
func NewCreateComponentVersionStageParamsWithContext(ctx context.Context) *CreateComponentVersionStageParams {
	var ()
	return &CreateComponentVersionStageParams{

		Context: ctx,
	}
}

// NewCreateComponentVersionStageParamsWithHTTPClient creates a new CreateComponentVersionStageParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewCreateComponentVersionStageParamsWithHTTPClient(client *http.Client) *CreateComponentVersionStageParams {
	var ()
	return &CreateComponentVersionStageParams{
		HTTPClient: client,
	}
}

/*CreateComponentVersionStageParams contains all the parameters to send to the API endpoint
for the create component version stage operation typically these are written to a http.Request
*/
type CreateComponentVersionStageParams struct {

	/*Body*/
	Body *service_model.V1EntityStageBodyRequest
	/*Entity
	  Entity namespace

	*/
	Entity string
	/*Name
	  Name of the version to apply the stage to

	*/
	Name string
	/*Owner
	  Owner of the namespace

	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the create component version stage params
func (o *CreateComponentVersionStageParams) WithTimeout(timeout time.Duration) *CreateComponentVersionStageParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the create component version stage params
func (o *CreateComponentVersionStageParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the create component version stage params
func (o *CreateComponentVersionStageParams) WithContext(ctx context.Context) *CreateComponentVersionStageParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the create component version stage params
func (o *CreateComponentVersionStageParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the create component version stage params
func (o *CreateComponentVersionStageParams) WithHTTPClient(client *http.Client) *CreateComponentVersionStageParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the create component version stage params
func (o *CreateComponentVersionStageParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the create component version stage params
func (o *CreateComponentVersionStageParams) WithBody(body *service_model.V1EntityStageBodyRequest) *CreateComponentVersionStageParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the create component version stage params
func (o *CreateComponentVersionStageParams) SetBody(body *service_model.V1EntityStageBodyRequest) {
	o.Body = body
}

// WithEntity adds the entity to the create component version stage params
func (o *CreateComponentVersionStageParams) WithEntity(entity string) *CreateComponentVersionStageParams {
	o.SetEntity(entity)
	return o
}

// SetEntity adds the entity to the create component version stage params
func (o *CreateComponentVersionStageParams) SetEntity(entity string) {
	o.Entity = entity
}

// WithName adds the name to the create component version stage params
func (o *CreateComponentVersionStageParams) WithName(name string) *CreateComponentVersionStageParams {
	o.SetName(name)
	return o
}

// SetName adds the name to the create component version stage params
func (o *CreateComponentVersionStageParams) SetName(name string) {
	o.Name = name
}

// WithOwner adds the owner to the create component version stage params
func (o *CreateComponentVersionStageParams) WithOwner(owner string) *CreateComponentVersionStageParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the create component version stage params
func (o *CreateComponentVersionStageParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *CreateComponentVersionStageParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param entity
	if err := r.SetPathParam("entity", o.Entity); err != nil {
		return err
	}

	// path param name
	if err := r.SetPathParam("name", o.Name); err != nil {
		return err
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
