import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {BookConfiguration} from '../../models/book-configuration/book-configuration';
import {
  Reference, BookConfigurationImpl,
  Book
} from '../../models/book-configuration/book-configuration-implementation';

@Injectable()
export class LibraryService {

  private referenceRequest = new Subject<Reference>();
  private referenceRequestedObservable$ = this.referenceRequest.asObservable();

  /**
   * Lookup a reference.
   *
   * This method will call next() on the "referenceRequest" Subject. A specific
   * component will register on this event to open the requested bookConfigurations in the
   * appropriate pdf.
   *
   * @param reference {string} of the form B37 or M42
   */
  public lookupReference(reference: string): void {
    const parsedReference = this.parseReference(reference)
    this.referenceRequest.next(parsedReference);
  }

  /**
   * Return an Observable that will notify you when a reference is requested.
   *
   * @returns {Observable<Reference>}
   */
  public getReferenceChange(): Observable<Reference> {
    return this.referenceRequestedObservable$;
  }

  /**
   * Return an array of Book Configurations
   *
   * @returns {Array<BookConfiguration>}
   */
  public getBookConfigurations(): BookConfiguration[] {
    const books: Array<BookConfiguration> = [];

    const basics = new BookConfigurationImpl();
    basics.book = Book.BASICS;
    basics.file = '/gurpsbasics.pdf';
    basics.offset = 0;

    const magic = new BookConfigurationImpl();
    magic.book = Book.MAGIC;
    magic.file = '/gurpsmagic.pdf';
    magic.offset = 0;

    books.push(magic);
    books.push(basics);

    return books;
  }

  /**
   * Return an array of Books
   *
   * @returns {Array<Book>}
   */
  public getBooks(): Book[] {

    const books: Book[] = [];

    books.push(Book.BASICS);
    books.push(Book.MAGIC);
    books.push(Book.MARTIAL_ARTS);
    books.push(Book.POWERS);
    books.push(Book.PSIONICS);

    return books;
  }

  /**
   * Store an array of books
   *
   * @param books {BookConfiguration[]}
   */
  public storeBooks(books: BookConfiguration[]): void {

  }

  private parseReference(reference: string): Reference {
    const book = new BookConfigurationImpl();
    book.book = Book.BASICS;
    book.file = '/gurpsbasics.pdf';
    book.offset = 0;

    const referenceModel = new Reference();
    referenceModel.bookConfiguration = book;
    referenceModel.page = 37;

    return referenceModel;
  }
}
