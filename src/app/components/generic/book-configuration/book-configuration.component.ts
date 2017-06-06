import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Book} from '../../../models/settings/book.model';

@Component({
  selector: 'gurpsy-book-configuration',
  templateUrl: 'book-configuration.component.html',
  styleUrls: ['book-configuration.component.scss']
})
export class BookConfigurationComponent implements OnInit {

  public static PDF_MATCHER = '(.*?)\.(PDF|pdf)$'

  @Input() public configuration: Book;
  @Input() public availableBooks: Array<string>;
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

  /**
   * Handle a focusOut event for the delete Button. This will ensure that the delete button gets re-disabled,
   * and the user will have to apply two concecutive tabs to delete this BookConfiguration.
   */

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
