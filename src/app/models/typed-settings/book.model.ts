import {Book} from '../book-configuration/book-model';
import {JsonProperty} from 'json-typescript-mapper';

export class BookModel {

  private static GURPS_BASIC = 'gurps-basic';
  private static GURPS_MAGIC = 'gurps-magic';
  private static GURPS_MARTIAL_ARTS = 'gurps-martial-arts';
  private static GURPS_POWERS = 'gurps-powers';
  private static GURPS_PSIONICS = 'gurps-psionics';

  public static _availableBooks: string[] = [
    BookModel.GURPS_BASIC,
    BookModel.GURPS_MAGIC,
    BookModel.GURPS_MARTIAL_ARTS,
    BookModel.GURPS_POWERS,
    BookModel.GURPS_PSIONICS
  ];

  @JsonProperty('book')
  public book: string;

  @JsonProperty('offset')
  public offset;

  @JsonProperty('file')
  public file;

  constructor (){
    this.book = undefined;
    this.offset = undefined;
    this.file = undefined;
  }
}
