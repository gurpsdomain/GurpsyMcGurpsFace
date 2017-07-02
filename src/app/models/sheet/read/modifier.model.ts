import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Modifier {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('pageReference', String)
  pageReference: string;

  @JsonProperty('note', String)
  note: string;

  constructor() {
    this.name = undefined;
    this.pageReference = undefined;
    this.note = undefined;
  }
}
