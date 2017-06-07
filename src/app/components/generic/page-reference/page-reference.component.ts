import {Component, Input, OnInit} from '@angular/core';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: 'page-reference.component.html',
  styleUrls: ['page-reference.component.scss']
})
export class PageReferenceComponent implements OnInit {

  @Input()
  public pageReference: string;
  public available = false;

  constructor(private pageReferenceService: PageReferenceService) {
  }

  public ngOnInit(): void {
    this.pageReferenceService.isReferenceAvailable(this.pageReference)
      .then(isReferenced => this.setAvailable(isReferenced))
      .catch(any => this.setAvailable(false));
  }

  public onGotoReference(): void {
    this.pageReferenceService.showReference(this.pageReference);
  }

  private setAvailable(available: boolean): void {
    this.available = available;
  }
}
