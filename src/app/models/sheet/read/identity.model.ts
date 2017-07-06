import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Identity {

  @JsonProperty('portrait', String)
  portrait: string;

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('title', String)
  title: string;

  @JsonProperty('religion', String)
  religion: string;

  constructor() {
    this.portrait = undefined;
    this.name = undefined;
    this.title = undefined;
    this.religion = undefined;
  }
}
