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

package project_searches_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ListProjectSearchesReader is a Reader for the ListProjectSearches structure.
type ListProjectSearchesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ListProjectSearchesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewListProjectSearchesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewListProjectSearchesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewListProjectSearchesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewListProjectSearchesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewListProjectSearchesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewListProjectSearchesOK creates a ListProjectSearchesOK with default headers values
func NewListProjectSearchesOK() *ListProjectSearchesOK {
	return &ListProjectSearchesOK{}
}

/*ListProjectSearchesOK handles this case with default header values.

A successful response.
*/
type ListProjectSearchesOK struct {
	Payload *service_model.V1ListSearchesResponse
}

func (o *ListProjectSearchesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches][%d] listProjectSearchesOK  %+v", 200, o.Payload)
}

func (o *ListProjectSearchesOK) GetPayload() *service_model.V1ListSearchesResponse {
	return o.Payload
}

func (o *ListProjectSearchesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListSearchesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchesNoContent creates a ListProjectSearchesNoContent with default headers values
func NewListProjectSearchesNoContent() *ListProjectSearchesNoContent {
	return &ListProjectSearchesNoContent{}
}

/*ListProjectSearchesNoContent handles this case with default header values.

No content.
*/
type ListProjectSearchesNoContent struct {
	Payload interface{}
}

func (o *ListProjectSearchesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches][%d] listProjectSearchesNoContent  %+v", 204, o.Payload)
}

func (o *ListProjectSearchesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchesForbidden creates a ListProjectSearchesForbidden with default headers values
func NewListProjectSearchesForbidden() *ListProjectSearchesForbidden {
	return &ListProjectSearchesForbidden{}
}

/*ListProjectSearchesForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ListProjectSearchesForbidden struct {
	Payload interface{}
}

func (o *ListProjectSearchesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches][%d] listProjectSearchesForbidden  %+v", 403, o.Payload)
}

func (o *ListProjectSearchesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchesNotFound creates a ListProjectSearchesNotFound with default headers values
func NewListProjectSearchesNotFound() *ListProjectSearchesNotFound {
	return &ListProjectSearchesNotFound{}
}

/*ListProjectSearchesNotFound handles this case with default header values.

Resource does not exist.
*/
type ListProjectSearchesNotFound struct {
	Payload interface{}
}

func (o *ListProjectSearchesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches][%d] listProjectSearchesNotFound  %+v", 404, o.Payload)
}

func (o *ListProjectSearchesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ListProjectSearchesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewListProjectSearchesDefault creates a ListProjectSearchesDefault with default headers values
func NewListProjectSearchesDefault(code int) *ListProjectSearchesDefault {
	return &ListProjectSearchesDefault{
		_statusCode: code,
	}
}

/*ListProjectSearchesDefault handles this case with default header values.

An unexpected error response.
*/
type ListProjectSearchesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the list project searches default response
func (o *ListProjectSearchesDefault) Code() int {
	return o._statusCode
}

func (o *ListProjectSearchesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/{owner}/{name}/searches][%d] ListProjectSearches default  %+v", o._statusCode, o.Payload)
}

func (o *ListProjectSearchesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ListProjectSearchesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
