import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {SettingsService} from '../settings/settings.service';
import {Reference} from '../../../models/reference/reference-model';
import {Book} from '../../../models/settings/book.model';

@Injectable()
export class PageReferenceService {


  private referenceRequest = new Subject<Reference>();
  private referenceRequestedObservable$ = this.referenceRequest.asObservable();

  private _lastReference: Reference;

  constructor(private settingsService: SettingsService) {
    this._lastReference = undefined;
  }

  /**
   * Test whether a Reference has been configured for the given input.
   * @param reference {string} of the form B37 or M42;
   * @return {Promise<boolean>} Whether there is a reference available.
   */
  public isReferenceAvailable(reference: string): Promise<boolean> {

    return this.settingsService.getBookConfigurations()
      .then(bookConfigurations => Promise.resolve(this.isReferenced(bookConfigurations, reference)))
      .catch(any => Promise.reject(false));
  }

  private isReferenced(bookConfigurations: Book[], reference: string): boolean {
    let isReferenced = false;

    for (const book of bookConfigurations) {
      if (book.isReferenced(reference)) {
        isReferenced = true;
        break;
      }
    }

    return isReferenced;
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

    this.settingsService.getBookConfigurations()
      .then(books => this.handleReferenceRequest(reference, books));
  }

  /**
   * Return an Observable that will notify you when a reference is requested.
   *
   * @returns {Observable<Reference>}
   */
  public getReferenceChange(): Observable < Reference > {
    return this.referenceRequestedObservable$;
  }

  /**
   * Return an array of all Books that are available as references.
   *
   * @returns {Array<string>}
   */
  public getBooks(): Promise < string[] > {
    return Promise.resolve(Book.BOOK_TYPES);
  }

  /**
   *
   * @return {Reference}
   */
  get lastReference(): Reference {
    return this._lastReference;
  }

  private handleReferenceRequest(reference: string, books: Book[]): void {

    let referencedBook: Book;

    for (const book of books) {
      if (book.isReferenced(reference)) {
        referencedBook = book;
      }
    }

    const referenceModel = new Reference();
    referenceModel.bookConfiguration = referencedBook;
    referenceModel.page = 9;

    this._lastReference = referenceModel;
    this.referenceRequest.next(referenceModel);
  }
}
