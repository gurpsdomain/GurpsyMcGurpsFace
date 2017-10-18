import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from '../../../converters/date/date.converter';

@JsonObject
export class Reward {

  @JsonProperty('date', DateConverter, true)
  date: Date;

  @JsonProperty('points', Number)
  points: number;

  constructor() {
    this.points = undefined;
    this.date = new Date();
  }
}
