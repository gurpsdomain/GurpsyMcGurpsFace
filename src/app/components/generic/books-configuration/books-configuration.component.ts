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

    this.reloadAvailableBooks(true);
  }

  /**
   * Called by one of the children if its bookConfiguration gets invalidated
   */
  public onInvalidateBookConfiguration(): void {
    this.validConfigurations = false;
  }

  /**
   * Called when one of the underlying bookConfiguration changes due to user input
   */
  public onChangeBookConfiguration(): void {
    this.changeBooksConfiguration.next();
    this.reloadAvailableBooks(true);
  }

  /**
   * Called when the user deletes one of tge underlying bookConfiguration
   */
  public onDeleteBookConfiguration(book: BookConfiguration): void {
    this.deleteBookConfiguration(book);
    this.changeBooksConfiguration.next();
    this.reloadAvailableBooks(true);
  }

  /**
   * Called when the user creates a new bookConfiguration
   */
  public onNewBookConfiguration(): void {
    this.validConfigurations = false;

    this.bookConfigurations.push(this.createNewBookConfiguration());
    this.reloadAvailableBooks(false);
  }

  private createNewBookConfiguration(): BookConfiguration {
    const bookConfiguration = new BookConfigurationImpl();
    bookConfiguration.book = this.availableBooks[0];

    return bookConfiguration;
  }

  private deleteBookConfiguration(book: BookConfiguration): void {
    const index = this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
  }

  private setBookConfigurations(bookConfigurations: BookConfiguration[]) {
    if (isArray(bookConfigurations)) {
      this.bookConfigurations = bookConfigurations;
    } else {
      this.bookConfigurations = [];
    }
  }

  private reloadAvailableBooks(updateValidity: boolean): void {
    this.libraryService.getBooks().then(books => this.setAvailableBooks(books, updateValidity));
  }

  private setAvailableBooks(books: Book[], updateValidity: boolean): void {
    for (const bookConfig of this.bookConfigurations) {
      const index = books.lastIndexOf(bookConfig.book);
      books.splice(index, 1);
    }

    this.availableBooks = books;

    if (updateValidity) {
      this.updateValidity();
    }
  }

  private updateValidity(): void {
    this.validConfigurations = this.availableBooks.length > 0;
  }
}
