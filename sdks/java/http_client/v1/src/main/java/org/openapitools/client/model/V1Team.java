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
 * The version of the OpenAPI document: 1.4.0
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
import java.util.List;
import org.threeten.bp.OffsetDateTime;

/**
 * V1Team
 */

public class V1Team {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private String uuid;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_PROJECTS = "projects";
  @SerializedName(SERIALIZED_NAME_PROJECTS)
  private List<String> projects = null;

  public static final String SERIALIZED_NAME_HUBS = "hubs";
  @SerializedName(SERIALIZED_NAME_HUBS)
  private List<String> hubs = null;

  public static final String SERIALIZED_NAME_REGISTRIES = "registries";
  @SerializedName(SERIALIZED_NAME_REGISTRIES)
  private List<String> registries = null;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  private OffsetDateTime updatedAt;


  public V1Team uuid(String uuid) {
    
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getUuid() {
    return uuid;
  }


  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  public V1Team name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


  public V1Team projects(List<String> projects) {
    
    this.projects = projects;
    return this;
  }

  public V1Team addProjectsItem(String projectsItem) {
    if (this.projects == null) {
      this.projects = new ArrayList<String>();
    }
    this.projects.add(projectsItem);
    return this;
  }

   /**
   * Get projects
   * @return projects
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getProjects() {
    return projects;
  }


  public void setProjects(List<String> projects) {
    this.projects = projects;
  }


  public V1Team hubs(List<String> hubs) {
    
    this.hubs = hubs;
    return this;
  }

  public V1Team addHubsItem(String hubsItem) {
    if (this.hubs == null) {
      this.hubs = new ArrayList<String>();
    }
    this.hubs.add(hubsItem);
    return this;
  }

   /**
   * Get hubs
   * @return hubs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getHubs() {
    return hubs;
  }


  public void setHubs(List<String> hubs) {
    this.hubs = hubs;
  }


  public V1Team registries(List<String> registries) {
    
    this.registries = registries;
    return this;
  }

  public V1Team addRegistriesItem(String registriesItem) {
    if (this.registries == null) {
      this.registries = new ArrayList<String>();
    }
    this.registries.add(registriesItem);
    return this;
  }

   /**
   * Get registries
   * @return registries
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<String> getRegistries() {
    return registries;
  }


  public void setRegistries(List<String> registries) {
    this.registries = registries;
  }


  public V1Team createdAt(OffsetDateTime createdAt) {
    
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Get createdAt
   * @return createdAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }


  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }


  public V1Team updatedAt(OffsetDateTime updatedAt) {
    
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Get updatedAt
   * @return updatedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }


  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Team v1Team = (V1Team) o;
    return Objects.equals(this.uuid, v1Team.uuid) &&
        Objects.equals(this.name, v1Team.name) &&
        Objects.equals(this.projects, v1Team.projects) &&
        Objects.equals(this.hubs, v1Team.hubs) &&
        Objects.equals(this.registries, v1Team.registries) &&
        Objects.equals(this.createdAt, v1Team.createdAt) &&
        Objects.equals(this.updatedAt, v1Team.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, name, projects, hubs, registries, createdAt, updatedAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Team {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    projects: ").append(toIndentedString(projects)).append("\n");
    sb.append("    hubs: ").append(toIndentedString(hubs)).append("\n");
    sb.append("    registries: ").append(toIndentedString(registries)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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

