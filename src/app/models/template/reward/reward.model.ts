import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from '../../../repositories/template/converters/date/date.converter';

@JsonObject
export class RewardTemplate {

  @JsonProperty('date', DateConverter, true)
  date: Date;

  @JsonProperty('points', Number)
  points: number;

  constructor() {
    this.points = undefined;
    this.date = new Date();
  }
}
