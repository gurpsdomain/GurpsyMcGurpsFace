import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from '../../../repositories/template/converters/date/date.converter';
import {UUID} from 'angular2-uuid';
import {Unit} from './enums/unit';

@JsonObject
export class MetaDataTemplate {

  @JsonProperty('id', String, false)
  id: string;

  @JsonProperty('createdOn', DateConverter, false)
  createdOn: Date;

  @JsonProperty('lastModified', DateConverter, false)
  lastModified: Date;

  @JsonProperty('unit', String, false)
  unit: Unit;

  constructor() {
    this.id = UUID.UUID();
    this.createdOn = new Date();
    this.lastModified = new Date();
    this.unit = Unit.IMPERIAL;
  }
}
