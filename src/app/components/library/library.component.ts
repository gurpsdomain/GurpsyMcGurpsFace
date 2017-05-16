import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gurpsy-library',
  templateUrl: 'library.component.html'
})
export class LibraryComponent implements OnInit {

  pdfSrc = 'assets/library/gurpslite.pdf';
  page = 1;
  zoom = 1;
  pdf;

  constructor() {
  }

  ngOnInit() {
  }

  onDecrement() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onIncrement() {
    if (this.page < this.pdf.numPages) {
      this.page++;
    }
  }

  onFirst() {
    this.page = 1;
  }

  onLast() {
    this.page = this.pdf.numPages;
  }

  callBackFn(pdf: PDFDocumentProxy) {
   this.pdf = pdf;
  }

  onZoomIn() {
    this.zoom /= 1.2;
  }

  onZoomOut() {
    this.zoom *= 1.2;
  }
}
