import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {
  Reference,
  BookConfigurationImpl,
  Book
} from '../../../models/book-configuration/book-configuration-implementation';
import {SettingsService} from '../settings/settings.service';

@Injectable()
export class LibraryService {

  private referenceRequest = new Subject<Reference>();
  private referenceRequestedObservable$ = this.referenceRequest.asObservable();
  private settingsService: SettingsService;

  constructor(settingsService: SettingsService) {
    this.settingsService = settingsService;
  }

  /**
   * Show a reference.
   *
   * This method will call next() on the "referenceRequest" Subject. A specific
   * component will register on this event to open the requested bookConfigurations in the
   * appropriate pdf.
   *
   * @param reference {string} of the form B37 or M42
   */
  public showReference(reference: string): void {
    const parsedReference = this.parseReference(reference)
    console.log('Showing page reference: ', reference);
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
   * Set BookConfigurations;
   *
   * @param BookConfiguration[]
   */
  public storeBookConfigurations(bookConfigurations: BookConfiguration[]) {
    this.settingsService.storeBookConfigurations(bookConfigurations);
  }

  /**
   * Retrieve the given BookConfigurations;
   *
   * @returns Promise<BookConfiguration[]>
   */
  public getBookConfigurations(): Promise<BookConfiguration[]> {
    return this.settingsService.getBookConfigurations();
  }

  /**
   * Return an array of Books that are available as references.
   *
   * @returns {Array<Book>}
   */
  public getBooks(): Promise<Book[]> {

    const books: Book[] = [];

    books.push(Book.BASICS);
    books.push(Book.MAGIC);
    books.push(Book.MARTIAL_ARTS);
    books.push(Book.POWERS);
    books.push(Book.PSIONICS);

    return Promise.resolve(books);
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
