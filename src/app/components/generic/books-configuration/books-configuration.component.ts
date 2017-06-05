import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {BookEnum} from '../../../models/book-configuration/book-model';
import {isArray} from 'util';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {Book} from '../../../models/settings/book.model';

@Component({
  selector: 'gurpsy-books-configuration',
  templateUrl: './books-configuration.component.html',
  styleUrls: ['./books-configuration.component.scss']
})
export class BooksConfigurationComponent implements OnInit {

  public bookConfigurations: Array<Book> = [];
  public availableBooks: Array<BookEnum> = [];
  public validConfigurations = true;

  @Output() public changeBooksConfiguration: EventEmitter<any> = new EventEmitter();

  constructor(private pageReferenceService: PageReferenceService,
              private settingsService: SettingsService) {
  }

  public ngOnInit(): void {
    this.settingsService.getBookConfigurations()
      .then(bookConfigurations => this.asyncInit(bookConfigurations))
      .catch(any => this.asyncInit([]));
  }

  private asyncInit(bookConfigurations: Book[]): void {
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
  public onDeleteBookConfiguration(book: Book): void {
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

  private createNewBookConfiguration(): Book {
    const bookConfiguration = new Book();
    bookConfiguration.book = this.availableBooks[0];

    return bookConfiguration;
  }

  private deleteBookConfiguration(book: Book): void {
    const index = this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
  }

  private setBookConfigurations(bookConfigurations: Book[]) {
    if (isArray(bookConfigurations)) {
      this.bookConfigurations = bookConfigurations;
    } else {
      this.bookConfigurations = [];
    }
  }

  private reloadAvailableBooks(updateValidity: boolean): void {
    this.pageReferenceService.getBooks().then(books => this.setAvailableBooks(books, updateValidity));
  }

  private setAvailableBooks(books: BookEnum[], updateValidity: boolean): void {
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
