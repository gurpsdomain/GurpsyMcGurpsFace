import {Injectable, OnInit} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {SettingsService} from '../settings/settings.service';
import {Reference} from '../../../models/reference/reference-model';
import {Book} from '../../../models/settings/book.model';
import {isArray} from 'util';

@Injectable()
export class PageReferenceService implements OnInit {

  private referenceRequest = new Subject<Reference>();
  private referenceRequestedObservable$ = this.referenceRequest.asObservable();

  public bookConfigurations: Array<Book> = [];

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit(): void {
    this.settingsService.getBookConfigurations()
      .then(bookConfigurations => this.setBookConfigurations(bookConfigurations))
      .catch(any => this.setBookConfigurations(any));

    this.settingsService.getSettingsObserver().subscribe(settings => this.setBookConfigurations(settings.books));
  }

  /**
   * Test whether a Reference has been configured for the given input.
   * @param reference {string} of the form B37 or M42;
   * @return {Promise<boolean>} Whether there is a reference available.
   */
  public isReferenceAvailable(reference: string): Promise<boolean> {

    return this.settingsService.getBookConfigurations().
      then(bookConfigurations => Promise.resolve(this.isReferenced(bookConfigurations, reference)))
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
    const parsedReference = this.parseReference(reference)
    this.referenceRequest.next(parsedReference);
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

  private setBookConfigurations(bookConfigurations: Book[]) {
    if (isArray(bookConfigurations)) {
      this.bookConfigurations = bookConfigurations;
    } else {
      this.bookConfigurations = [];
    }
  }

  private parseReference(reference: string): Reference {
    const book = new Book();
    book.book = Book.BOOK_TYPES[0];
    book.file = '/gurpsbasics.pdf';
    book.offset = 0;

    book.isReferenced(reference);

    const referenceModel = new Reference();
    referenceModel.bookConfiguration = book;
    referenceModel.page = 37;

    return referenceModel;
  }
}
