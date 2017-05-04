import {Component, OnInit} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {LibraryService} from '../../../services/library-service/library.service';
import {BookConfigurationImpl, Book} from '../../../models/book-configuration/book-configuration-implementation';

@Component({
  selector: 'gurpsy-references-configuration',
  templateUrl: './books-configuration.component.html',
  styleUrls: ['./books-configuration.component.scss']
})
export class BooksConfigurationComponent implements OnInit {

  public bookConfigurations: Array<BookConfiguration> = [];
  public availableBooks: Array<Book>;
  private libraryService: LibraryService;

  constructor(libraryService: LibraryService) {
    this.libraryService = libraryService;
    this.bookConfigurations = this.libraryService.getBookConfigurations();
    this.availableBooks = this.libraryService.getBooks();
  }

  public ngOnInit(): void {
    this.updateAvailableBooks();
  }

  public onChangeBookConfiguration(book: BookConfiguration): void {
    this.updateAvailableBooks();
  }

  public onDeleteBookConfiguration(book: BookConfiguration): void {
    const index = this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
    this.updateAvailableBooks();
  }

  public onNewBookConfiguration(): void {
    const book = new BookConfigurationImpl();
    this.bookConfigurations.push(book);
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
