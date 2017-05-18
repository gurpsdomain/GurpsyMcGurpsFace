import {Component, OnInit} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {LibraryService} from '../../../services/front-end/library-service/library.service';
import {BookConfigurationImpl, Book} from '../../../models/book-configuration/book-configuration-implementation';
import {isArray} from 'util';

@Component({
  selector: 'gurpsy-books-configuration',
  templateUrl: './books-configuration.component.html',
  styleUrls: ['./books-configuration.component.scss']
})
export class BooksConfigurationComponent implements OnInit {

  public bookConfigurations: Array<BookConfiguration> = [];
  public availableBooks: Array<Book>;
  private libraryService: LibraryService;

  constructor(libraryService: LibraryService) {
    this.libraryService = libraryService;
  }

  public ngOnInit(): void {
    this.libraryService.getBookConfigurations()
      .then(bookConfigurations => this.setBookConfigurations(bookConfigurations))
      .catch(any => this.setBookConfigurations([]));
    this.updateAvailableBooks();
  }

  public onChangeBookConfiguration(): void {
    this.updateAvailableBooks();
  }

  public onDeleteBookConfiguration(book: BookConfiguration): void {
    const index = this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
    this.updateAvailableBooks();
  }

  public onNewBookConfiguration(): void {
    const bookConfiguration = new BookConfigurationImpl();
    bookConfiguration.book = this.availableBooks[0];
    this.bookConfigurations.push(bookConfiguration);
    this.updateAvailableBooks();
  }

  public storeBookConfigurations(): void {
    this.libraryService.storeBookConfigurations(this.bookConfigurations);
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
}
