import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Equipment {

  @JsonProperty('name', String)
  name: string;

  constructor() {
    this.name = undefined;
  }
}
