import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gurpsy-library',
  templateUrl: 'library.component.html'
})
export class LibraryComponent implements OnInit {

  pdfSrc = 'assets/library/gurpslite.pdf';
  page = 1;
  zoom = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
