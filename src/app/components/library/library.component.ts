import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gurpsy-library',
  templateUrl: 'library.component.html',
  styleUrls: ['library.component.scss']
})
export class LibraryComponent implements OnInit {

  pdfSrc = 'assets/library/gurpslite.pdf';
  page = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
