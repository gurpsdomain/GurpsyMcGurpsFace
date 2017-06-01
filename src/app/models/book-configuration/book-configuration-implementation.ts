import {BookConfiguration} from './book-configuration';

export class BookConfigurationImpl implements BookConfiguration {
  book: Book = -1;
  offset = 0;
  file = 'file:///';
}

export class Reference {

  public bookConfiguration: BookConfiguration;
  private _page: number;

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

}

export enum Book {
  BASICS,
  MAGIC,
  POWERS,
  PSIONICS,
  MARTIAL_ARTS
}
