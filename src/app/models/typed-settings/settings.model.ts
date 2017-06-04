import {JsonProperty} from 'json-typescript-mapper';

import {BookModel} from './book.model';

export class SettingsModel {

  @JsonProperty('bodyContent')
  bodyContent: Number;

  @JsonProperty('serverUrl')
  serverUrl: string;

  @JsonProperty('theme')
  theme: string;

  @JsonProperty({clazz: BookModel, name: 'books'})
  books: BookModel[];

  constructor() {
    this.bodyContent = 0;
    this.serverUrl = undefined;
    this.theme = undefined;
    this.books = [];
  }
}

