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

package model_registry_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// DeleteModelVersionReader is a Reader for the DeleteModelVersion structure.
type DeleteModelVersionReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteModelVersionReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteModelVersionOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewDeleteModelVersionNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewDeleteModelVersionForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewDeleteModelVersionNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewDeleteModelVersionDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeleteModelVersionOK creates a DeleteModelVersionOK with default headers values
func NewDeleteModelVersionOK() *DeleteModelVersionOK {
	return &DeleteModelVersionOK{}
}

/*DeleteModelVersionOK handles this case with default header values.

A successful response.
*/
type DeleteModelVersionOK struct {
}

func (o *DeleteModelVersionOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/registry/{entity}/versions/{name}][%d] deleteModelVersionOK ", 200)
}

func (o *DeleteModelVersionOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewDeleteModelVersionNoContent creates a DeleteModelVersionNoContent with default headers values
func NewDeleteModelVersionNoContent() *DeleteModelVersionNoContent {
	return &DeleteModelVersionNoContent{}
}

/*DeleteModelVersionNoContent handles this case with default header values.

No content.
*/
type DeleteModelVersionNoContent struct {
	Payload interface{}
}

func (o *DeleteModelVersionNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/registry/{entity}/versions/{name}][%d] deleteModelVersionNoContent  %+v", 204, o.Payload)
}

func (o *DeleteModelVersionNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteModelVersionNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteModelVersionForbidden creates a DeleteModelVersionForbidden with default headers values
func NewDeleteModelVersionForbidden() *DeleteModelVersionForbidden {
	return &DeleteModelVersionForbidden{}
}

/*DeleteModelVersionForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type DeleteModelVersionForbidden struct {
	Payload interface{}
}

func (o *DeleteModelVersionForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/registry/{entity}/versions/{name}][%d] deleteModelVersionForbidden  %+v", 403, o.Payload)
}

func (o *DeleteModelVersionForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteModelVersionForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteModelVersionNotFound creates a DeleteModelVersionNotFound with default headers values
func NewDeleteModelVersionNotFound() *DeleteModelVersionNotFound {
	return &DeleteModelVersionNotFound{}
}

/*DeleteModelVersionNotFound handles this case with default header values.

Resource does not exist.
*/
type DeleteModelVersionNotFound struct {
	Payload interface{}
}

func (o *DeleteModelVersionNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/registry/{entity}/versions/{name}][%d] deleteModelVersionNotFound  %+v", 404, o.Payload)
}

func (o *DeleteModelVersionNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteModelVersionNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteModelVersionDefault creates a DeleteModelVersionDefault with default headers values
func NewDeleteModelVersionDefault(code int) *DeleteModelVersionDefault {
	return &DeleteModelVersionDefault{
		_statusCode: code,
	}
}

/*DeleteModelVersionDefault handles this case with default header values.

An unexpected error response.
*/
type DeleteModelVersionDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the delete model version default response
func (o *DeleteModelVersionDefault) Code() int {
	return o._statusCode
}

func (o *DeleteModelVersionDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/registry/{entity}/versions/{name}][%d] DeleteModelVersion default  %+v", o._statusCode, o.Payload)
}

func (o *DeleteModelVersionDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *DeleteModelVersionDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
