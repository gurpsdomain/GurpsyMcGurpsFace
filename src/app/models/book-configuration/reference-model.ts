import {BookModel} from './book-model';

export class Reference {

  public bookConfiguration: BookModel;
  private _page: number;

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }
}
