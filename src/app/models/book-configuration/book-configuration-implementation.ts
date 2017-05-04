import {BookConfiguration} from './book-configuration';

export class BookConfigurationImpl implements BookConfiguration {
  book: Book = -1;
  offset = 0;
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
