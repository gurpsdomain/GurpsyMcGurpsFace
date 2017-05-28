import {Component, Input} from '@angular/core';
import {LibraryService} from '../../../services/front-end/library/library.service';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: 'page-reference.component.html',
  styleUrls: ['page-reference.component.scss']
})
export class PageReferenceComponent {

  @Input() pageReference: string;

  private pageReferenceService: LibraryService

  constructor(pageReferenceService: LibraryService) {
    this.pageReferenceService = pageReferenceService;
  }

  public onGotoReference(): void {
    this.pageReferenceService.showReference(this.pageReference);
  }
}
