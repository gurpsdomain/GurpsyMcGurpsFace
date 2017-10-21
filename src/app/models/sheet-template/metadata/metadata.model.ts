import {JsonObject, JsonProperty} from 'json2typescript';
import {DateConverter} from '../../../repositories/template/converters/date/date.converter';
import {UUID} from 'angular2-uuid';

@JsonObject
export class MetaData {

  @JsonProperty('id', String, false)
  id: string;

  @JsonProperty('createdOn', DateConverter, false)
  createdOn: Date;

  @JsonProperty('lastModified', DateConverter, false)
  lastModified: Date;

  constructor() {
    this.id = UUID.UUID();
    this.createdOn = new Date();
    this.lastModified = new Date();
  }
}
