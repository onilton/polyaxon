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

/*
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

/**
 * V1WasbType
 */

public class V1WasbType {
  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private String container;

  public static final String SERIALIZED_NAME_STORAGE_ACCOUNT = "storage_account";
  @SerializedName(SERIALIZED_NAME_STORAGE_ACCOUNT)
  private String storageAccount;

  public static final String SERIALIZED_NAME_PATH = "path";
  @SerializedName(SERIALIZED_NAME_PATH)
  private Boolean path;


  public V1WasbType container(String container) {
    
    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getContainer() {
    return container;
  }


  public void setContainer(String container) {
    this.container = container;
  }


  public V1WasbType storageAccount(String storageAccount) {
    
    this.storageAccount = storageAccount;
    return this;
  }

   /**
   * Get storageAccount
   * @return storageAccount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getStorageAccount() {
    return storageAccount;
  }


  public void setStorageAccount(String storageAccount) {
    this.storageAccount = storageAccount;
  }


  public V1WasbType path(Boolean path) {
    
    this.path = path;
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getPath() {
    return path;
  }


  public void setPath(Boolean path) {
    this.path = path;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1WasbType v1WasbType = (V1WasbType) o;
    return Objects.equals(this.container, v1WasbType.container) &&
        Objects.equals(this.storageAccount, v1WasbType.storageAccount) &&
        Objects.equals(this.path, v1WasbType.path);
  }

  @Override
  public int hashCode() {
    return Objects.hash(container, storageAccount, path);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1WasbType {\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
    sb.append("    storageAccount: ").append(toIndentedString(storageAccount)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
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

