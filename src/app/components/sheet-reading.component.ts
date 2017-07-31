import {Component, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/model/sheet.model';
import {Template} from '../models/sheet/template/template.model';
import {SheetService} from '../services/front-end/sheet/sheet.service';

@Component({
  template: ''
})
export class SheetReadingComponent implements OnInit {

  public sheet: Sheet;

  constructor(protected sheetService: SheetService) {
    this.sheet = new Sheet(new Template());
  }

  ngOnInit(): void {
    this.fetchSheet()
    this.sheetService.sheetUpdated$.subscribe(readModel => this.fetchSheet());
  }

  private fetchSheet() {
    this.sheetService.getSheet().then(sheet => this.sheet = sheet);
  }
}
