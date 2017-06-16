import {JsonObject, JsonProperty} from 'json2typescript';
import {Book} from './book.model';

@JsonObject
export class Settings {

  @JsonProperty('bodyContent', Number)
  bodyContent: Number;

  @JsonProperty('serverUrl', String)
  serverUrl: string;

  @JsonProperty('metrics', String)
  metrics: string;

  @JsonProperty('theme', String)
  theme: string;

  @JsonProperty('books', [Book])
  books: Book[];

  constructor() {
    this.bodyContent = 0;
    this.serverUrl = '';
    this.theme = '';
    this.metrics = '';
    this.books = [];
  }
}

