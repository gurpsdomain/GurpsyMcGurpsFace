import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Disadvantage {

  @JsonProperty('name', String)
  name: string;

  constructor() {
    this.name = undefined;
  }
}
