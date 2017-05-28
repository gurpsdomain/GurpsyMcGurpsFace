import {Component, Input} from '@angular/core';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: 'page-reference.component.html',
  styleUrls: ['page-reference.component.scss']
})
export class PageReferenceComponent {

  @Input() pageReference: String;

  constructor() {
  }

  public onGotoReference(): void {
    console.log('Go to reference: ', this.pageReference);
  }
}
