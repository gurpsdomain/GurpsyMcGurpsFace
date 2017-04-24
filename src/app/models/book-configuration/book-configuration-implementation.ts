import {BookConfiguration} from './book-configuration';

export class BookConfigurationImpl implements BookConfiguration {
  book: Book;
  offset: number;
  file: string;
}

export class Reference {
  bookConfiguration: BookConfiguration;
  page: number;
}

export enum Book {
  BASICS,
  MAGIC,
  POWERS,
  PSIONICS,
  MARTIAL_ARTS
}
