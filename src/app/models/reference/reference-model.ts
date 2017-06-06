import {Book} from '../settings/book.model';

export class Reference {

  public bookConfiguration: Book;
  private _page: number;

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }
}
