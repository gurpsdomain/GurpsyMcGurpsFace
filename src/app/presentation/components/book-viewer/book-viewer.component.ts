import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PageReferenceService} from '../../../services/page-reference/page-reference.service';

@Component({
  selector: 'gurpsy-book-viewer',
  templateUrl: './book-viewer.component.html',
  styleUrls: ['./book-viewer.component.scss']
})
export class BookViewerComponent implements OnInit {

  @Output() onCloseBookViewer: EventEmitter<void> = new EventEmitter<void>();

  pdfSrc = 'assets/library/gurpslite.pdf';
  page = 1;
  zoom = 1;

  private pdf: PDFDocumentProxy;

  constructor(private pageReferenceService: PageReferenceService) {
  }

  public ngOnInit(): void {
    this.loadReference();
    this.pageReferenceService.referenceRequested$.subscribe(data => this.page = data, err => this.page = 1);
  }

  /**
   * Called when the user clicks the close button.
   */
  public onCloseBookViewerClicked(): void {
    this.onCloseBookViewer.next();
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
    this.page = this.pageReferenceService.currentReference;
  }
}
