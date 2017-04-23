import {BookConfiguration} from '../book-configuration/book-configuration';

export interface Config {
  bodyContent: Number;
  serverUrl: string;
  theme: string;
  books: BookConfiguration[];
}

export class ConfigImpl implements Config {
  bodyContent = 0;
  serverUrl = '';
  theme = '';
  books = [];
}
