import {Component} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {LibraryService} from '../../../services/library-service/library.service';
import {BookConfigurationImpl, Book} from '../../../models/book-configuration/book-configuration-implementation';

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
    const index =  this.bookConfigurations.lastIndexOf(book);
    this.bookConfigurations.splice(index, 1);
  }

  public onNewBookConfiguration(): void {
    const book = new BookConfigurationImpl();
    this.bookConfigurations.push(book);
  }

  public getAvailableBooks(): Array<Book> {

    return this.libraryService.getBooks();
  }
}
