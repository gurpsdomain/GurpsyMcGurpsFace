import {Component, Input} from '@angular/core';
import {PageReferenceService} from '../../../../services/page-reference/page-reference.service';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: './page-reference.component.html',
  styleUrls: ['./page-reference.component.scss']
})
export class PageReferenceComponent {

  @Input()
  public pageReference: string;

  constructor(private pageReferenceService: PageReferenceService) {
  }

  public onGotoReference(): void {
    this.pageReferenceService.showReference(this.pageReference);
  }
}
