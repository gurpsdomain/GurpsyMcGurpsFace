export class BookModel {

  private static GURPS_BASIC = 'gurps-basic';
  private static GURPS_MAGIC = 'gurps-magic';
  private static GURPS_MARTIAL_ARTS = 'gurps-martial-arts';
  private static GURPS_POWERS = 'gurps-powers';
  private static GURPS_PSIONICS = 'gurps-psionics';

  private static _availableBooks: string[] = [
    BookModel.GURPS_BASIC,
    BookModel.GURPS_MAGIC,
    BookModel.GURPS_MARTIAL_ARTS,
    BookModel.GURPS_POWERS,
    BookModel.GURPS_PSIONICS
  ];

  public book: Book = -1;
  public offset = 0;
  public file = 'file:///';

  static get availableBooks(): string[] {
    return this._availableBooks;
  }
}

export enum Book {
  BASICS,
  MAGIC,
  POWERS,
  PSIONICS,
  MARTIAL_ARTS
}
