import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Equipment {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('pageReference', String)
  pageReference: string;

  constructor() {
    this.name = undefined;
    this.pageReference = undefined;
  }
}
