import {Component, Input, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/model/sheet.model';
import {TemplateDM} from '../models/sheet/template/template.model';
import {SheetService} from '../services/front-end/sheet/sheet.service';

@Component({
  template: ''
})
export class SheetViewingComponent implements OnInit {

  public sheet: Sheet;

  constructor(protected sheetService: SheetService) {
    this.sheet = new Sheet(new TemplateDM());
  }

  ngOnInit(): void {
    this.fetchSheet()
    this.sheetService.sheetUpdated$.subscribe(readModel => this.fetchSheet());
  }

  private fetchSheet() {
    this.sheetService.getSheet().then(sheet => this.sheet = sheet);
  }
}
