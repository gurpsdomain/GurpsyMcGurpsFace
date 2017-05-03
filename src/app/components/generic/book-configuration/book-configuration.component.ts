import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {BookConfiguration} from '../../../models/book-configuration/book-configuration';
import {Book} from '../../../models/book-configuration/book-configuration-implementation';
import {isUndefined} from 'util';

@Component({
  selector: 'gurpsy-book-configuration',
  templateUrl: 'book-configuration.component.html',
  styleUrls: ['book-configuration.component.scss']
})
export class BookConfigurationComponent implements OnInit {


  @Input() configuration: BookConfiguration;
  @Input() availableBooks: Array<Book>;
  @Output() deleteBookConfiguration: EventEmitter<any> = new EventEmitter();
  @Output() changeBookConfiguration: EventEmitter<any> = new EventEmitter();

  public showDetails = false;

  public ngOnInit(): void {
    if (this.isBookConfigurationEmpty()) {
      this.showDetails = true;
    }
  }

  public onChangeBookConfiguration(): void {
    this.changeBookConfiguration.next();
  }

  public onDeleteBookConfiguration(): void {
    this.deleteBookConfiguration.next();
  }

  public onToggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  public onFileSelect(event): void {
    console.log('Received event: ', event);
  }

  private isBookConfigurationEmpty(): boolean {
    return isUndefined(this.configuration.book);
  }
}
