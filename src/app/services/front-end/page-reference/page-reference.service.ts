import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {
  BookModel,
  Book
} from '../../../models/book-configuration/book-model';
import {SettingsService} from '../settings/settings.service';
import {Reference} from '../../../models/book-configuration/reference-model';

@Injectable()
export class PageReferenceService {

  private referenceRequest = new Subject<Reference>();
  private referenceRequestedObservable$ = this.referenceRequest.asObservable();

  constructor(private settingsService: SettingsService) {
  }

  /**
   * Test whether a Reference has been configered for the given input.
   * @param reference {string} of the form B37 or M42;
   * @return {boolean} Whether there is a reference available.
   */
  public isReferenceAvailable(reference: string): boolean {
    if (!!reference && reference.lastIndexOf('B') === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Show a reference.
   *
   * This method will call next() on the "referenceRequest" Subject. A specific
   * component will register on this event to open the requested bookConfigurations in the
   * appropriate pdf.
   *
   * @param {string} reference  A reference of the form B37 or M42
   */
  public showReference(reference: string): void {
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
    const book = new BookModel();
    book.book = Book.BASICS;
    book.file = '/gurpsbasics.pdf';
    book.offset = 0;

    const referenceModel = new Reference();
    referenceModel.bookConfiguration = book;
    referenceModel.page = 37;

    return referenceModel;
  }
}
