import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {LibraryService} from '../../../services/front-end/library/library.service';
import {BookConfigurationImpl, Book} from '../../../models/book-configuration/book-configuration-implementation';
import {isArray} from 'util';
import {SettingsService} from '../../../services/front-end/settings/settings.service';

@Component({
  selector: 'gurpsy-books-configuration',
  templateUrl: './books-configuration.component.html',
  styleUrls: ['./books-configuration.component.scss']
})
export class BooksConfigurationComponent implements OnInit {

  public bookConfigurations: Array<BookConfiguration> = [];
  public availableBooks: Array<Book> = [];
  public validConfigurations = true;

  private libraryService: LibraryService;
  private settingsService: SettingsService;

  @Output() public changeBooksConfiguration: EventEmitter<any> = new EventEmitter();

  constructor(libraryService: LibraryService, settingsService: SettingsService) {
    this.libraryService = libraryService;
    this.settingsService = settingsService;
  }

  public ngOnInit(): void {
    this.settingsService.getBookConfigurations()
      .then(bookConfigurations => this.asyncInit(bookConfigurations))
      .catch(any => this.asyncInit([]));
  }

  private asyncInit(bookConfigurations: BookConfiguration[]): void {
    this.setBookConfigurations(bookConfigurations);

    this.updateAvailableBooks();

    this.updateValidity();
  }

  /**
   * Called when one of the underlying bookConfiguration changes due to user input
   */
  public onChangeBookConfiguration(): void {
    this.updateAvailableBooks();
    this.changeBooksConfiguration.next();

    this.updateValidity();
  }

  /**
   * Called when the user deletes one of tge underlying bookConfiguration
   */
  public onDeleteBookConfiguration(book: BookConfiguration): void {
    const index = this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
    this.changeBooksConfiguration.next();

    this.updateAvailableBooks();
    this.updateValidity();
  }

  /**
   * Called when the user creates a new bookConfiguration
   */
  public onNewBookConfiguration(): void {
    const bookConfiguration = new BookConfigurationImpl();
    bookConfiguration.book = this.availableBooks[0];
    this.bookConfigurations.push(bookConfiguration);

    this.updateAvailableBooks();
    this.updateValidity();
  }

  private setBookConfigurations(bookConfigurations: BookConfiguration[]) {
    if (isArray(bookConfigurations)) {
      this.bookConfigurations = bookConfigurations;
    } else {
      this.bookConfigurations = [];
    }
  }

  private updateAvailableBooks(): void {
    const books = this.libraryService.getBooks();

    for (const bookConfig of this.bookConfigurations) {
      const index = books.lastIndexOf(bookConfig.book);
      books.splice(index, 1);
    }

    this.availableBooks = books;
  }

  private updateValidity(): void {
    this.validConfigurations = this.availableBooks.length > 0;
  }
}
