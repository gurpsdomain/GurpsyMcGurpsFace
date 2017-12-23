import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class EquipmentTemplate {

  @JsonProperty('name', String)
  name: string;

  constructor() {
    this.name = undefined;
  }
}
