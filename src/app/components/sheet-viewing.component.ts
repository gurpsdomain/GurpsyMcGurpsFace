import {Component, Input, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/sheet.model';
import {SheetTemplate} from '../models/sheet-template/sheet-template.model';
import {SheetService} from '../services/front-end/sheet/sheet.service';

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
    this.sheetService.getSheet().then(sheet => this.sheet = sheet);
  }
}
