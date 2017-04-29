import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {Book} from '../../../models/book-configuration/book-configuration-implementation';

@Component({
  selector: 'gurpsy-book-configuration',
  templateUrl: 'book-configuration.component.html',
  styleUrls: ['book-configuration.component.scss']
})
export class BookConfigurationComponent {

  @Input() configuration: BookConfiguration;
  @Input() availableBooks: Array<Book>;
  @Output() deleteBookConfiguration: EventEmitter<any> = new EventEmitter();
  @Output() changeBookConfiguration: EventEmitter<any> = new EventEmitter();

  public onChangeBookConfiguration(): void {
    this.changeBookConfiguration.next();
  }

  public onDeleteBookConfiguration(): void {
    this.deleteBookConfiguration.next();
  }


}
