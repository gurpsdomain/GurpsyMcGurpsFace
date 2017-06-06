import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {SettingsService} from '../settings/settings.service';
import {Reference} from '../../../models/reference/reference-model';
import {Book} from '../../../models/settings/book.model';

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
   * Return an array of all Books that are available as references.
   *
   * @returns {Array<string>}
   */
  public getBooks(): Promise<string[]> {

    return Promise.resolve(Book.BOOK_TYPES);
  }

  private parseReference(reference: string): Reference {
    const book = new Book();
    book.book = Book.BOOK_TYPES[0];
    book.file = '/gurpsbasics.pdf';
    book.offset = 0;

    const referenceModel = new Reference();
    referenceModel.bookConfiguration = book;
    referenceModel.page = 37;

    return referenceModel;
  }
}
