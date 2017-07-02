import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Note {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('note', String)
  note: string;

  constructor() {
    this.name = undefined;
    this.note = undefined;
  }
}
