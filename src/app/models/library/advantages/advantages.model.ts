import {JsonObject, JsonProperty} from 'json2typescript';
import {AdvantageLibrary} from '../advantage/advantage.model';

@JsonObject
export class AdvantagesLibrary {

  @JsonProperty('book', String)
  book: string;

  @JsonProperty('advantages', [AdvantageLibrary])
  advantages: AdvantageLibrary[];

  constructor() {
    this.book = undefined;
    this.advantages = [];
  }
}
