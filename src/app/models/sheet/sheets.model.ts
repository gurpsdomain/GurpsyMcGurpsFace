import {JsonObject, JsonProperty} from 'json2typescript';
import {UpdateSheet} from './update/update-sheet.model';

@JsonObject
export class Sheets {

  @JsonProperty('current', UpdateSheet)
  current: UpdateSheet;

  @JsonProperty('previous', [UpdateSheet])
  previous: UpdateSheet[];

  constructor() {
    this.current = undefined;
    this.previous = [];
  }
}
