import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class ModifierTemplate {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('variation', String)
  variation: string;

  constructor() {
    this.name = undefined;
    this.variation = undefined;
  }
}
