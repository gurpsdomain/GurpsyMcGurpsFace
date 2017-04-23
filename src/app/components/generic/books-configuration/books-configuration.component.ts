import {Component} from '@angular/core';
import {BookConfiguration, BookConfigurationImpl, Book} from '../../../models/book-configuration/book-configuration';
import {LibraryService} from '../../../services/library-service/library.service';

@Component({
  selector: 'gurpsy-references-configuration',
  templateUrl: './books-configuration.component.html',
  styleUrls: ['./books-configuration.component.scss']
})
export class BooksConfigurationComponent {

  public bookConfigurations: Array<BookConfiguration> = [];

  private libraryService: LibraryService;

  constructor(libraryService: LibraryService) {
    this.libraryService = libraryService;

    this.bookConfigurations = this.libraryService.getBookConfigurations();
  }

  public onChangeBookConfiguration(book: BookConfiguration): void {
    console.log('A BookConfiguration configuration has changed: ', book);
  }

  public onDeleteBookConfiguration(book: BookConfiguration): void {
    console.log('A BookConfiguration configuration has been deleted: ', book);
  }

  public onNewBookConfiguration(): void {
    const book = new BookConfigurationImpl();
    console.log('A BookConfiguration configuration has been created: ', book);
    this.bookConfigurations.push(book);
  }

  public getAvailableBooks(): Array<Book> {

    return this.libraryService.getBooks();
  }

}
