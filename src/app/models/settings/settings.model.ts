import {BookModel} from '../book-configuration/book-model';

export interface Config {
  bodyContent: Number;
  serverUrl: string;
  theme: string;
  books: BookModel[];
}

export class ConfigImpl implements Config {
  bodyContent = 0;
  serverUrl = '';
  theme = '';
  books = [];
}
