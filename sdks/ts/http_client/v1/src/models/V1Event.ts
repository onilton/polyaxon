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

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V1EventArtifact,
    V1EventArtifactFromJSON,
    V1EventArtifactFromJSONTyped,
    V1EventArtifactToJSON,
    V1EventAudio,
    V1EventAudioFromJSON,
    V1EventAudioFromJSONTyped,
    V1EventAudioToJSON,
    V1EventChart,
    V1EventChartFromJSON,
    V1EventChartFromJSONTyped,
    V1EventChartToJSON,
    V1EventCurve,
    V1EventCurveFromJSON,
    V1EventCurveFromJSONTyped,
    V1EventCurveToJSON,
    V1EventDataframe,
    V1EventDataframeFromJSON,
    V1EventDataframeFromJSONTyped,
    V1EventDataframeToJSON,
    V1EventHistogram,
    V1EventHistogramFromJSON,
    V1EventHistogramFromJSONTyped,
    V1EventHistogramToJSON,
    V1EventImage,
    V1EventImageFromJSON,
    V1EventImageFromJSONTyped,
    V1EventImageToJSON,
    V1EventModel,
    V1EventModelFromJSON,
    V1EventModelFromJSONTyped,
    V1EventModelToJSON,
    V1EventVideo,
    V1EventVideoFromJSON,
    V1EventVideoFromJSONTyped,
    V1EventVideoToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Event
 */
export interface V1Event {
    /**
     * 
     * @type {Date}
     * @memberof V1Event
     */
    timestamp?: Date;
    /**
     * Global step of the event.
     * @type {number}
     * @memberof V1Event
     */
    step?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Event
     */
    metric?: number;
    /**
     * 
     * @type {V1EventImage}
     * @memberof V1Event
     */
    image?: V1EventImage;
    /**
     * 
     * @type {V1EventHistogram}
     * @memberof V1Event
     */
    histogram?: V1EventHistogram;
    /**
     * 
     * @type {V1EventAudio}
     * @memberof V1Event
     */
    audio?: V1EventAudio;
    /**
     * 
     * @type {V1EventVideo}
     * @memberof V1Event
     */
    video?: V1EventVideo;
    /**
     * 
     * @type {string}
     * @memberof V1Event
     */
    html?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Event
     */
    text?: string;
    /**
     * 
     * @type {V1EventChart}
     * @memberof V1Event
     */
    chart?: V1EventChart;
    /**
     * 
     * @type {V1EventModel}
     * @memberof V1Event
     */
    model?: V1EventModel;
    /**
     * 
     * @type {V1EventArtifact}
     * @memberof V1Event
     */
    artifact?: V1EventArtifact;
    /**
     * 
     * @type {V1EventDataframe}
     * @memberof V1Event
     */
    dataframe?: V1EventDataframe;
    /**
     * 
     * @type {V1EventCurve}
     * @memberof V1Event
     */
    curve?: V1EventCurve;
}

export function V1EventFromJSON(json: any): V1Event {
    return V1EventFromJSONTyped(json, false);
}

export function V1EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'step': !exists(json, 'step') ? undefined : json['step'],
        'metric': !exists(json, 'metric') ? undefined : json['metric'],
        'image': !exists(json, 'image') ? undefined : V1EventImageFromJSON(json['image']),
        'histogram': !exists(json, 'histogram') ? undefined : V1EventHistogramFromJSON(json['histogram']),
        'audio': !exists(json, 'audio') ? undefined : V1EventAudioFromJSON(json['audio']),
        'video': !exists(json, 'video') ? undefined : V1EventVideoFromJSON(json['video']),
        'html': !exists(json, 'html') ? undefined : json['html'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'chart': !exists(json, 'chart') ? undefined : V1EventChartFromJSON(json['chart']),
        'model': !exists(json, 'model') ? undefined : V1EventModelFromJSON(json['model']),
        'artifact': !exists(json, 'artifact') ? undefined : V1EventArtifactFromJSON(json['artifact']),
        'dataframe': !exists(json, 'dataframe') ? undefined : V1EventDataframeFromJSON(json['dataframe']),
        'curve': !exists(json, 'curve') ? undefined : V1EventCurveFromJSON(json['curve']),
    };
}

export function V1EventToJSON(value?: V1Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'step': value.step,
        'metric': value.metric,
        'image': V1EventImageToJSON(value.image),
        'histogram': V1EventHistogramToJSON(value.histogram),
        'audio': V1EventAudioToJSON(value.audio),
        'video': V1EventVideoToJSON(value.video),
        'html': value.html,
        'text': value.text,
        'chart': V1EventChartToJSON(value.chart),
        'model': V1EventModelToJSON(value.model),
        'artifact': V1EventArtifactToJSON(value.artifact),
        'dataframe': V1EventDataframeToJSON(value.dataframe),
        'curve': V1EventCurveToJSON(value.curve),
    };
}


