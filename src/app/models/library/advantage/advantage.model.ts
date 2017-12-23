import {JsonObject, JsonProperty} from 'json2typescript';
import {AdvantageType} from './advantage-type.enum';

@JsonObject
export class AdvantageLibrary {

  @JsonProperty('name', String)
  name: string;

  @JsonProperty('type', [String])
  type: AdvantageType[];

  @JsonProperty('reference', String)
  reference: string;

  constructor() {
    this.name = undefined;
    this.type = [];
    this.reference = undefined;
  }
}
