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

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ResumeRunReader is a Reader for the ResumeRun structure.
type ResumeRunReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ResumeRunReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewResumeRunOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewResumeRunNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewResumeRunForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewResumeRunNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewResumeRunDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewResumeRunOK creates a ResumeRunOK with default headers values
func NewResumeRunOK() *ResumeRunOK {
	return &ResumeRunOK{}
}

/*ResumeRunOK handles this case with default header values.

A successful response.
*/
type ResumeRunOK struct {
	Payload *service_model.V1Run
}

func (o *ResumeRunOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{entity.owner}/{entity.entity}/runs/{entity.uuid}/resume][%d] resumeRunOK  %+v", 200, o.Payload)
}

func (o *ResumeRunOK) GetPayload() *service_model.V1Run {
	return o.Payload
}

func (o *ResumeRunOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Run)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResumeRunNoContent creates a ResumeRunNoContent with default headers values
func NewResumeRunNoContent() *ResumeRunNoContent {
	return &ResumeRunNoContent{}
}

/*ResumeRunNoContent handles this case with default header values.

No content.
*/
type ResumeRunNoContent struct {
	Payload interface{}
}

func (o *ResumeRunNoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{entity.owner}/{entity.entity}/runs/{entity.uuid}/resume][%d] resumeRunNoContent  %+v", 204, o.Payload)
}

func (o *ResumeRunNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ResumeRunNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResumeRunForbidden creates a ResumeRunForbidden with default headers values
func NewResumeRunForbidden() *ResumeRunForbidden {
	return &ResumeRunForbidden{}
}

/*ResumeRunForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ResumeRunForbidden struct {
	Payload interface{}
}

func (o *ResumeRunForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{entity.owner}/{entity.entity}/runs/{entity.uuid}/resume][%d] resumeRunForbidden  %+v", 403, o.Payload)
}

func (o *ResumeRunForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ResumeRunForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResumeRunNotFound creates a ResumeRunNotFound with default headers values
func NewResumeRunNotFound() *ResumeRunNotFound {
	return &ResumeRunNotFound{}
}

/*ResumeRunNotFound handles this case with default header values.

Resource does not exist.
*/
type ResumeRunNotFound struct {
	Payload interface{}
}

func (o *ResumeRunNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{entity.owner}/{entity.entity}/runs/{entity.uuid}/resume][%d] resumeRunNotFound  %+v", 404, o.Payload)
}

func (o *ResumeRunNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ResumeRunNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewResumeRunDefault creates a ResumeRunDefault with default headers values
func NewResumeRunDefault(code int) *ResumeRunDefault {
	return &ResumeRunDefault{
		_statusCode: code,
	}
}

/*ResumeRunDefault handles this case with default header values.

An unexpected error response.
*/
type ResumeRunDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the resume run default response
func (o *ResumeRunDefault) Code() int {
	return o._statusCode
}

func (o *ResumeRunDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{entity.owner}/{entity.entity}/runs/{entity.uuid}/resume][%d] ResumeRun default  %+v", o._statusCode, o.Payload)
}

func (o *ResumeRunDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ResumeRunDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
