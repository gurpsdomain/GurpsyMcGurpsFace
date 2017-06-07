import {Component, OnInit} from '@angular/core';
import {PageReferenceService} from '../../services/front-end/page-reference/page-reference.service';

@Component({
  selector: 'gurpsy-book-viewer',
  templateUrl: 'book-viewer.component.html'
})
export class LibraryComponent implements OnInit {

  pdfSrc = 'assets/library/gurpslite.pdf';
  page = 1;
  zoom = 1;

  private pdf: PDFDocumentProxy;

  constructor(private pageReferenceService: PageReferenceService) {
  }

  public ngOnInit(): void {
    this.loadReference();
  }

  /**
   * Call when the pdf has been loaded.
   *
   * @param {PDFDocumentProxy} pdf
   */
  public onPDFLoaded(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
  }

  /**
   * Call when the page number is decremented.
   */
  public onDecrement(): void {
    if (this.page > 1) {
      this.page--;
    }
  }

  /**
   * Call when the page number is incremented.
   */
  public onIncrement(): void {
    if (this.page < this.pdf.numPages) {
      this.page++;
    }
  }

  /**
   * Call when the first page number is requested.
   */
  public onFirst(): void {
    this.page = 1;
  }

  /**
   * Call when the last number is requested.
   */
  public onLast(): void {
    this.page = this.pdf.numPages;
  }

  /**
   * Call when the zoom level is incremented.
   */
  public onZoomIn(): void {
    this.zoom /= 1.2;
  }

  /**
   * Call when the zoom level is decremented.
   */
  public onZoomOut(): void {
    this.zoom *= 1.2;
  }

  private loadReference(): void {
    const reference = this.pageReferenceService.lastReference;

    if (reference) {
      console.log('There is a last reference: ', reference);

      this.page = reference.page;
    }
  }
}
