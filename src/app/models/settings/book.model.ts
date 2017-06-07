import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Book {

  private static REGEX_PATTERN_BOOK = '';
  private static REGEX_PATTERN_PAGE = '[0-9]*$';
  private static GURPS_BASIC = 'gurps-basic';
  private static GURPS_BASIC_REFERENCE = 'B';
  private static GURPS_MAGIC = 'gurps-magic';
  private static GURPS_MAGIC_REFERENCE = 'M';
  private static GURPS_MARTIAL_ARTS = 'gurps-martial-arts';
  private static GURPS_MARTIAL_ARTS_REFERENCE = 'MA';
  private static GURPS_POWERS = 'gurps-powers';
  private static GURPS_POWERS_REFERENCE = 'P';
  private static GURPS_PSIONICS = 'gurps-psionics';
  private static GURPS_PSIONICS_REFERENCE = 'PS';

  public static BOOK_TYPES: string[] = [
    Book.GURPS_BASIC,
    Book.GURPS_MAGIC,
    Book.GURPS_MARTIAL_ARTS,
    Book.GURPS_POWERS,
    Book.GURPS_PSIONICS
  ];


  @JsonProperty('book', String)
  public book: string;

  @JsonProperty('offset', Number)
  public offset: Number;

  @JsonProperty('file', String)
  public file: string;


  private static getBookForReference(reference: string): string {
    const regex = new RegExp(Book.REGEX_PATTERN_PAGE)

    const bookSubstring = reference.replace(regex, '');

    switch (bookSubstring) {
      case Book.GURPS_BASIC_REFERENCE:
        return Book.GURPS_BASIC;
      case Book.GURPS_MAGIC_REFERENCE:
        return Book.GURPS_MAGIC;
      case Book.GURPS_MARTIAL_ARTS_REFERENCE:
        return Book.GURPS_MARTIAL_ARTS;
      case Book.GURPS_PSIONICS_REFERENCE:
        return Book.GURPS_PSIONICS;
      case Book.GURPS_POWERS_REFERENCE:
        return Book.GURPS_POWERS;
      default:
        return undefined;
    }
  }

  private static getReferenceForBook(book: string): string {
    switch (book) {
      case Book.GURPS_BASIC:
        return Book.GURPS_BASIC_REFERENCE;
      case Book.GURPS_MAGIC:
        return Book.GURPS_MAGIC_REFERENCE;
      case Book.GURPS_MARTIAL_ARTS:
        return Book.GURPS_MARTIAL_ARTS_REFERENCE;
      case Book.GURPS_PSIONICS:
        return Book.GURPS_PSIONICS_REFERENCE;
      case Book.GURPS_POWERS:
        return Book.GURPS_POWERS_REFERENCE;
      default:
        return undefined;
    }
  }

  constructor() {
    this.book = '';
    this.offset = 0;
    this.file = '';
  }

  /**
   * Returns true if the provided reference references this Book instance
   *
   * @param reference of the form B37 or M42
   * @return {boolean}
   */
  public isReferenced(reference: string): boolean {
    const referencedBook = Book.getBookForReference(reference);

    return (referencedBook && referencedBook === this.book);
  }


}
