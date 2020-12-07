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
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListComponentVersionNamesReader is a Reader for the ListComponentVersionNames structure.
type ListComponentVersionNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListComponentVersionNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListComponentVersionNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListComponentVersionNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListComponentVersionNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListComponentVersionNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListComponentVersionNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListComponentVersionNamesOK creates a ListComponentVersionNamesOK with default headers values
func NewListComponentVersionNamesOK() *ListComponentVersionNamesOK {
	return &ListComponentVersionNamesOK{}
}

/*ListComponentVersionNamesOK handles this case with default header values.

A successful response.
*/
type ListComponentVersionNamesOK struct {
	Payload *service_model.V1ListComponentVersionsResponse
}

func (o *ListComponentVersionNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/hub/{name}/versions/names][%d] listComponentVersionNamesOK  %+v", 200, o.Payload)
}

func (o *ListComponentVersionNamesOK) GetPayload() *service_model.V1ListComponentVersionsResponse {
	return o.Payload
}

func (o *ListComponentVersionNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListComponentVersionsResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListComponentVersionNamesNoContent creates a ListComponentVersionNamesNoContent with default headers values
func NewListComponentVersionNamesNoContent() *ListComponentVersionNamesNoContent {
	return &ListComponentVersionNamesNoContent{}
}

/*ListComponentVersionNamesNoContent handles this case with default header values.

No content.
*/
type ListComponentVersionNamesNoContent struct {
	Payload interface{}
}

func (o *ListComponentVersionNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/hub/{name}/versions/names][%d] listComponentVersionNamesNoContent  %+v", 204, o.Payload)
}

func (o *ListComponentVersionNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListComponentVersionNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListComponentVersionNamesForbidden creates a ListComponentVersionNamesForbidden with default headers values
func NewListComponentVersionNamesForbidden() *ListComponentVersionNamesForbidden {
	return &ListComponentVersionNamesForbidden{}
}

/*ListComponentVersionNamesForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ListComponentVersionNamesForbidden struct {
	Payload interface{}
}

func (o *ListComponentVersionNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/hub/{name}/versions/names][%d] listComponentVersionNamesForbidden  %+v", 403, o.Payload)
}

func (o *ListComponentVersionNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListComponentVersionNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListComponentVersionNamesNotFound creates a ListComponentVersionNamesNotFound with default headers values
func NewListComponentVersionNamesNotFound() *ListComponentVersionNamesNotFound {
	return &ListComponentVersionNamesNotFound{}
}

/*ListComponentVersionNamesNotFound handles this case with default header values.

Resource does not exist.
*/
type ListComponentVersionNamesNotFound struct {
	Payload interface{}
}

func (o *ListComponentVersionNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/hub/{name}/versions/names][%d] listComponentVersionNamesNotFound  %+v", 404, o.Payload)
}

func (o *ListComponentVersionNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListComponentVersionNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListComponentVersionNamesDefault creates a ListComponentVersionNamesDefault with default headers values
func NewListComponentVersionNamesDefault(code int) *ListComponentVersionNamesDefault {
	return &ListComponentVersionNamesDefault{
		_statusCode: code,
	}
}

/*ListComponentVersionNamesDefault handles this case with default header values.

An unexpected error response.
*/
type ListComponentVersionNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list component version names default response
func (o *ListComponentVersionNamesDefault) Code() int {
	return o._statusCode
}

func (o *ListComponentVersionNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/hub/{name}/versions/names][%d] ListComponentVersionNames default  %+v", o._statusCode, o.Payload)
}

func (o *ListComponentVersionNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListComponentVersionNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
