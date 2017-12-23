import {Component, OnInit} from '@angular/core';
import {PageReferenceService} from '../../../services/page-reference/page-reference.service';

@Component({
  selector: 'gurpsy-book-viewer',
  templateUrl: './book-viewer.component.html',
  styleUrls: ['./book-viewer.component.scss']
})
export class BookViewerComponent implements OnInit {

  pdfSrc = 'assets/books/gurpslite.pdf';
  page = 1;
  zoom = 1;

  constructor(private pageReferenceService: PageReferenceService) {
  }

  public ngOnInit(): void {
    this.loadReference();
    this.pageReferenceService.referenceRequested$.subscribe(data => this.page = data, err => this.page = 1);
  }


  /**
   * Call when the zoom level is incremented.
   */
  public onZoomIn(): void {
    this.zoom *= 1.2;
  }

  /**
   * Call when the zoom level is decremented.
   */
  public onZoomOut(): void {
    this.zoom /= 1.2;
  }

  private loadReference(): void {
    this.page = this.pageReferenceService.currentReference;
  }
}
