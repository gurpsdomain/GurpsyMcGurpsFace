import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Book {

  private static GURPS_BASIC = 'gurps-basic';
  private static GURPS_MAGIC = 'gurps-magic';
  private static GURPS_MARTIAL_ARTS = 'gurps-martial-arts';
  private static GURPS_POWERS = 'gurps-powers';
  private static GURPS_PSIONICS = 'gurps-psionics';

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

  constructor() {
    this.book = '';
    this.offset = 0;
    this.file = '';
  }
}
