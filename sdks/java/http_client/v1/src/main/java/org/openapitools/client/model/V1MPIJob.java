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
import org.openapitools.client.model.V1CleanPodPolicy;
import org.openapitools.client.model.V1KFReplica;

/**
 * V1MPIJob
 */

public class V1MPIJob {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "mpi_job";

  public static final String SERIALIZED_NAME_CLEAN_POD_POLICY = "cleanPodPolicy";
  @SerializedName(SERIALIZED_NAME_CLEAN_POD_POLICY)
  private V1CleanPodPolicy cleanPodPolicy = V1CleanPodPolicy.ALL;

  public static final String SERIALIZED_NAME_SLOTS_PER_WORKER = "slots_per_worker";
  @SerializedName(SERIALIZED_NAME_SLOTS_PER_WORKER)
  private Integer slotsPerWorker;

  public static final String SERIALIZED_NAME_LAUNCHER = "launcher";
  @SerializedName(SERIALIZED_NAME_LAUNCHER)
  private V1KFReplica launcher;

  public static final String SERIALIZED_NAME_WORKER = "worker";
  @SerializedName(SERIALIZED_NAME_WORKER)
  private V1KFReplica worker;


  public V1MPIJob kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1MPIJob cleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    
    this.cleanPodPolicy = cleanPodPolicy;
    return this;
  }

   /**
   * Get cleanPodPolicy
   * @return cleanPodPolicy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1CleanPodPolicy getCleanPodPolicy() {
    return cleanPodPolicy;
  }


  public void setCleanPodPolicy(V1CleanPodPolicy cleanPodPolicy) {
    this.cleanPodPolicy = cleanPodPolicy;
  }


  public V1MPIJob slotsPerWorker(Integer slotsPerWorker) {
    
    this.slotsPerWorker = slotsPerWorker;
    return this;
  }

   /**
   * Get slotsPerWorker
   * @return slotsPerWorker
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getSlotsPerWorker() {
    return slotsPerWorker;
  }


  public void setSlotsPerWorker(Integer slotsPerWorker) {
    this.slotsPerWorker = slotsPerWorker;
  }


  public V1MPIJob launcher(V1KFReplica launcher) {
    
    this.launcher = launcher;
    return this;
  }

   /**
   * Get launcher
   * @return launcher
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1KFReplica getLauncher() {
    return launcher;
  }


  public void setLauncher(V1KFReplica launcher) {
    this.launcher = launcher;
  }


  public V1MPIJob worker(V1KFReplica worker) {
    
    this.worker = worker;
    return this;
  }

   /**
   * Get worker
   * @return worker
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1KFReplica getWorker() {
    return worker;
  }


  public void setWorker(V1KFReplica worker) {
    this.worker = worker;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1MPIJob v1MPIJob = (V1MPIJob) o;
    return Objects.equals(this.kind, v1MPIJob.kind) &&
        Objects.equals(this.cleanPodPolicy, v1MPIJob.cleanPodPolicy) &&
        Objects.equals(this.slotsPerWorker, v1MPIJob.slotsPerWorker) &&
        Objects.equals(this.launcher, v1MPIJob.launcher) &&
        Objects.equals(this.worker, v1MPIJob.worker);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, cleanPodPolicy, slotsPerWorker, launcher, worker);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1MPIJob {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    cleanPodPolicy: ").append(toIndentedString(cleanPodPolicy)).append("\n");
    sb.append("    slotsPerWorker: ").append(toIndentedString(slotsPerWorker)).append("\n");
    sb.append("    launcher: ").append(toIndentedString(launcher)).append("\n");
    sb.append("    worker: ").append(toIndentedString(worker)).append("\n");
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

