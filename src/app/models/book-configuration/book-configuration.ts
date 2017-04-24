import {Book} from './book-configuration-implementation';

export interface BookConfiguration {
  book: Book;
  offset: number;
  file: string;
}
