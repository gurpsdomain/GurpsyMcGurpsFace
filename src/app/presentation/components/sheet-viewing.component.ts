import {Component, OnInit} from '@angular/core';
import {Sheet} from '../../models/sheet/sheet.model';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';
import {SheetService} from '../../services/sheet/sheet.service';

@Component({
  template: ''
})
export class SheetViewingComponent implements OnInit {

  public sheet: Sheet;

  constructor(protected sheetService: SheetService) {
    this.sheet = new Sheet(new SheetTemplate());
  }

  ngOnInit(): void {
    this.fetchSheet()
    this.sheetService.sheetUpdated$.subscribe(readModel => this.fetchSheet());
  }

  private fetchSheet() {
    this.sheetService.getSheet().then(sheet => this.setSheet(sheet));
  }

  private setSheet(sheet: Sheet): void {
    this.sheet = sheet
    this.sheetUpdated();
  }

  /**
   * Override this method to be notified when the sheet has been updated.
   */
  protected sheetUpdated(): void {

  }
}
