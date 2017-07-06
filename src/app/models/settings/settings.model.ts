import {JsonObject, JsonProperty} from 'json2typescript';
import {Book} from './book.model';

@JsonObject
export class Settings {

  @JsonProperty('bodyContent', Number)
  bodyContent: Number;

  @JsonProperty('metrics', String)
  metrics: string;

  @JsonProperty('theme', String)
  theme: string;

  @JsonProperty('books', [Book])
  books: Book[];

  constructor() {
    this.bodyContent = 0;
    this.theme = '';
    this.metrics = '';
    this.books = [];
  }
}

