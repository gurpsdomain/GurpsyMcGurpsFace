import {JsonObject, JsonProperty} from 'json2typescript';
import {InputSheet} from './input/input.sheet.model';

@JsonObject
export class Sheets {

  @JsonProperty('current', InputSheet)
  current: InputSheet;

  @JsonProperty('previous', [InputSheet])
  previous: InputSheet[];

  constructor() {
    this.current = undefined;
    this.previous = [];
  }
}
