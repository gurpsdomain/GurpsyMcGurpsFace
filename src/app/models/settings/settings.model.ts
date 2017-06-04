import {BookModel} from '../book-configuration/book-model';

export interface Settings {
  bodyContent: Number;
  serverUrl: string;
  theme: string;
  books: BookModel[];
}

export class SettingsImpl implements Settings {
  bodyContent = 0;
  serverUrl = '';
  theme = '';
  books = [];
}
