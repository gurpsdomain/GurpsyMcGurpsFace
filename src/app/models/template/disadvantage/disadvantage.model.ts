import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class DisadvantageTemplate {

  @JsonProperty('name', String)
  name: string;

  constructor() {
    this.name = undefined;
  }
}
