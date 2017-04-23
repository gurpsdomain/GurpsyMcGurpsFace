import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: 'page-reference.component.html',
  styleUrls: ['page-reference.component.scss']
})
export class PageReferenceComponent implements OnInit {

  @Input() pageReference: String;
  private book: String;
  private page: number;

  constructor() {
  }

  ngOnInit() {
  }
}
