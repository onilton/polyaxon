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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.9.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Hook();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Hook', function() {
    it('should create an instance of V1Hook', function() {
      // uncomment below and update the code to test V1Hook
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be.a(PolyaxonSdk.V1Hook);
    });

    it('should have the property connection (base name: "connection")', function() {
      // uncomment below and update the code to test the property connection
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property trigger (base name: "trigger")', function() {
      // uncomment below and update the code to test the property trigger
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property hubRef (base name: "hubRef")', function() {
      // uncomment below and update the code to test the property hubRef
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property params (base name: "params")', function() {
      // uncomment below and update the code to test the property params
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property queue (base name: "queue")', function() {
      // uncomment below and update the code to test the property queue
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property presets (base name: "presets")', function() {
      // uncomment below and update the code to test the property presets
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

    it('should have the property disableDefaults (base name: "disableDefaults")', function() {
      // uncomment below and update the code to test the property disableDefaults
      //var instane = new PolyaxonSdk.V1Hook();
      //expect(instance).to.be();
    });

  });

}));
