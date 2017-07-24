import {JsonObject, JsonProperty} from 'json2typescript';
import {Template} from './template/template.model';

@JsonObject
export class Sheets {

  @JsonProperty('current', Template)
  current: Template;

  @JsonProperty('previous', [Template])
  previous: Template[];

  constructor() {
    this.current = undefined;
    this.previous = [];
  }
}
