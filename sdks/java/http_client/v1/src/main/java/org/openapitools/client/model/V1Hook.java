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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.7.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.V1Param;
import org.openapitools.client.model.V1Statuses;

/**
 * V1Hook
 */

public class V1Hook {
  public static final String SERIALIZED_NAME_CONNECTION = "connection";
  @SerializedName(SERIALIZED_NAME_CONNECTION)
  private String connection;

  public static final String SERIALIZED_NAME_TRIGGER = "trigger";
  @SerializedName(SERIALIZED_NAME_TRIGGER)
  private V1Statuses trigger = V1Statuses.CREATED;

  public static final String SERIALIZED_NAME_HUB_REF = "hubRef";
  @SerializedName(SERIALIZED_NAME_HUB_REF)
  private String hubRef;

  public static final String SERIALIZED_NAME_CONDITIONS = "conditions";
  @SerializedName(SERIALIZED_NAME_CONDITIONS)
  private String conditions;

  public static final String SERIALIZED_NAME_PARAMS = "params";
  @SerializedName(SERIALIZED_NAME_PARAMS)
  private Map<String, V1Param> params = null;

  public static final String SERIALIZED_NAME_PRESETS = "presets";
  @SerializedName(SERIALIZED_NAME_PRESETS)
  private List<String> presets = null;

  public static final String SERIALIZED_NAME_DISABLE_DEFAULTS = "disableDefaults";
  @SerializedName(SERIALIZED_NAME_DISABLE_DEFAULTS)
  private Boolean disableDefaults;


  public V1Hook connection(String connection) {
    
    this.connection = connection;
    return this;
  }

   /**
   * Get connection
   * @return connection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConnection() {
    return connection;
  }


  public void setConnection(String connection) {
    this.connection = connection;
  }


  public V1Hook trigger(V1Statuses trigger) {
    
    this.trigger = trigger;
    return this;
  }

   /**
   * Get trigger
   * @return trigger
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1Statuses getTrigger() {
    return trigger;
  }


  public void setTrigger(V1Statuses trigger) {
    this.trigger = trigger;
  }


  public V1Hook hubRef(String hubRef) {
    
    this.hubRef = hubRef;
    return this;
  }

   /**
   * Get hubRef
   * @return hubRef
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getHubRef() {
    return hubRef;
  }


  public void setHubRef(String hubRef) {
    this.hubRef = hubRef;
  }


  public V1Hook conditions(String conditions) {
    
    this.conditions = conditions;
    return this;
  }

   /**
   * Get conditions
   * @return conditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConditions() {
    return conditions;
  }


  public void setConditions(String conditions) {
    this.conditions = conditions;
  }


  public V1Hook params(Map<String, V1Param> params) {
    
    this.params = params;
    return this;
  }

  public V1Hook putParamsItem(String key, V1Param paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<String, V1Param>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, V1Param> getParams() {
    return params;
  }


  public void setParams(Map<String, V1Param> params) {
    this.params = params;
  }


  public V1Hook presets(List<String> presets) {
    
    this.presets = presets;
    return this;
  }

  public V1Hook addPresetsItem(String presetsItem) {
    if (this.presets == null) {
      this.presets = new ArrayList<String>();
    }
    this.presets.add(presetsItem);
    return this;
  }

   /**
   * Get presets
   * @return presets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getPresets() {
    return presets;
  }


  public void setPresets(List<String> presets) {
    this.presets = presets;
  }


  public V1Hook disableDefaults(Boolean disableDefaults) {
    
    this.disableDefaults = disableDefaults;
    return this;
  }

   /**
   * Get disableDefaults
   * @return disableDefaults
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getDisableDefaults() {
    return disableDefaults;
  }


  public void setDisableDefaults(Boolean disableDefaults) {
    this.disableDefaults = disableDefaults;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Hook v1Hook = (V1Hook) o;
    return Objects.equals(this.connection, v1Hook.connection) &&
        Objects.equals(this.trigger, v1Hook.trigger) &&
        Objects.equals(this.hubRef, v1Hook.hubRef) &&
        Objects.equals(this.conditions, v1Hook.conditions) &&
        Objects.equals(this.params, v1Hook.params) &&
        Objects.equals(this.presets, v1Hook.presets) &&
        Objects.equals(this.disableDefaults, v1Hook.disableDefaults);
  }

  @Override
  public int hashCode() {
    return Objects.hash(connection, trigger, hubRef, conditions, params, presets, disableDefaults);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Hook {\n");
    sb.append("    connection: ").append(toIndentedString(connection)).append("\n");
    sb.append("    trigger: ").append(toIndentedString(trigger)).append("\n");
    sb.append("    hubRef: ").append(toIndentedString(hubRef)).append("\n");
    sb.append("    conditions: ").append(toIndentedString(conditions)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    presets: ").append(toIndentedString(presets)).append("\n");
    sb.append("    disableDefaults: ").append(toIndentedString(disableDefaults)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

