import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PageReferenceService {

  private referenceRequest = new Subject<number>();
  public referenceRequested$ = this.referenceRequest.asObservable();

  private _currentReference: number;

  constructor() {
    this._currentReference = 0;
  }

  /**
   * Show a reference.
   *
   * This method will call next() on the "referenceRequest" Subject. A specific
   * component will register on this event to open the requested bookConfigurations in the
   * appropriate pdf.
   *
   * @param {string} reference  A reference containing only a number
   */
  public showReference(reference: string): void {

    this.handleReferenceRequest(reference);
  }

  /**
   * Return the current reference.
   *
   * @return {number}
   */
  get currentReference(): number {
    return this._currentReference;
  }

  private handleReferenceRequest(reference: string): void {
    const pageNumber = Number.parseInt(reference);
    this._currentReference = pageNumber;

    this.referenceRequest.next(pageNumber);
  }
}
