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
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// GetProjectReader is a Reader for the GetProject structure.
type GetProjectReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetProjectReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetProjectOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewGetProjectNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewGetProjectForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetProjectNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewGetProjectDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewGetProjectOK creates a GetProjectOK with default headers values
func NewGetProjectOK() *GetProjectOK {
	return &GetProjectOK{}
}

/*GetProjectOK handles this case with default header values.

A successful response.
*/
type GetProjectOK struct {
	Payload *service_model.V1Project
}

func (o *GetProjectOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}][%d] getProjectOK  %+v", 200, o.Payload)
}

func (o *GetProjectOK) GetPayload() *service_model.V1Project {
	return o.Payload
}

func (o *GetProjectOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Project)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetProjectNoContent creates a GetProjectNoContent with default headers values
func NewGetProjectNoContent() *GetProjectNoContent {
	return &GetProjectNoContent{}
}

/*GetProjectNoContent handles this case with default header values.

No content.
*/
type GetProjectNoContent struct {
	Payload interface{}
}

func (o *GetProjectNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}][%d] getProjectNoContent  %+v", 204, o.Payload)
}

func (o *GetProjectNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *GetProjectNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetProjectForbidden creates a GetProjectForbidden with default headers values
func NewGetProjectForbidden() *GetProjectForbidden {
	return &GetProjectForbidden{}
}

/*GetProjectForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type GetProjectForbidden struct {
	Payload interface{}
}

func (o *GetProjectForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}][%d] getProjectForbidden  %+v", 403, o.Payload)
}

func (o *GetProjectForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *GetProjectForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetProjectNotFound creates a GetProjectNotFound with default headers values
func NewGetProjectNotFound() *GetProjectNotFound {
	return &GetProjectNotFound{}
}

/*GetProjectNotFound handles this case with default header values.

Resource does not exist.
*/
type GetProjectNotFound struct {
	Payload interface{}
}

func (o *GetProjectNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}][%d] getProjectNotFound  %+v", 404, o.Payload)
}

func (o *GetProjectNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *GetProjectNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetProjectDefault creates a GetProjectDefault with default headers values
func NewGetProjectDefault(code int) *GetProjectDefault {
	return &GetProjectDefault{
		_statusCode: code,
	}
}

/*GetProjectDefault handles this case with default header values.

An unexpected error response.
*/
type GetProjectDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the get project default response
func (o *GetProjectDefault) Code() int {
	return o._statusCode
}

func (o *GetProjectDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}][%d] GetProject default  %+v", o._statusCode, o.Payload)
}

func (o *GetProjectDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *GetProjectDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
