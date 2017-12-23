import {JsonObject, JsonProperty} from 'json2typescript';
import {Advantage} from '../advantage/advantage.model';

@JsonObject
export class Advantages {

  @JsonProperty('book', String)
  book: string;

  @JsonProperty('edition', Number)
  edition: number;

  @JsonProperty('version', String)
  version: string;


  @JsonProperty('advantages', [Advantage])
  advantages: Advantage[];

  constructor() {
    this.book = undefined;
    this.edition = undefined;
    this.version = undefined;
    this.advantages = [];
  }
}
