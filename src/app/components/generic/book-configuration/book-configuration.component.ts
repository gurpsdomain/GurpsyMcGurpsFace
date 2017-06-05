import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {BookEnum, BookModel} from '../../../models/book-configuration/book-model';

@Component({
  selector: 'gurpsy-book-configuration',
  templateUrl: 'book-configuration.component.html',
  styleUrls: ['book-configuration.component.scss']
})
export class BookConfigurationComponent implements OnInit {

  public static PDF_MATCHER = '(.*?)\.(PDF|pdf)$'

  @Input() public configuration: BookModel;
  @Input() public availableBooks: Array<BookEnum>;
  @Output() public deleteBookConfiguration: EventEmitter<any> = new EventEmitter();
  @Output() public changeBookConfiguration: EventEmitter<any> = new EventEmitter();
  @Output() public invalidateBookConfiguration: EventEmitter<any> = new EventEmitter();

  public showDetails = false;
  public deleteEnabled = false;

  public ngOnInit(): void {
    if (!this.isValidBookConfiguration()) {
      this.showDetails = true;
    }
  }

  /**
   * Handle a changed bookConfiguration. Should be called in any
   * situation the configuration is changed.
   */
  public onChangeBookConfiguration(): void {
    if (this.isValidBookConfiguration()) {
      this.changeBookConfiguration.next();
    } else {
      this.invalidateBookConfiguration.next();
    }
  }

  public focusOutFunction(): void {
    this.deleteEnabled = false;
  }

  /**
   * Handle the situation when this bookConfiguration is deleted.
   *
   * To ensure it is not accidentally deleted, the user will have to
   * press it twice. The first time the button gets enabled. The second
   * press could
   *
   */
  public onDeleteBookConfiguration(): void {


    if (this.deleteEnabled) {
      this.deleteBookConfiguration.next();
    } else {
      this.deleteEnabled = true;
    }
  }

  /**
   * Hide/show the details.
   */
  public onToggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  private isValidBookConfiguration(): boolean {
    const regexp = new RegExp(BookConfigurationComponent.PDF_MATCHER);
    const isValidFile = regexp.test(this.configuration.file);

    return isValidFile;
  }
}
