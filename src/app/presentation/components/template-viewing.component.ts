import {Component, OnInit} from '@angular/core';
import {Sheet} from '../../models/sheet/sheet.model';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';
import {TemplateUpdaterDialogComponent} from '../dialoges/template-updaters/template-updater-dialog.component';
import {SheetService} from '../../services/sheet/sheet.service';
import {SheetViewingComponent} from './sheet-viewing.component';
import {MatDialog} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';

@Component({
  template: ''
})
export class TemplateViewingComponent extends SheetViewingComponent implements OnInit {

  sheet: Sheet;
  template: SheetTemplate;

  /**
   * Create a new SheetUpdatingComponent that will open a Dialog of type T.
   *
   * @param {MatDialog} dialog
   * @param {SheetService} sheetService
   * @param {ComponentType<T extends TemplateUpdaterDialogComponent>} dialogType
   */
  constructor(sheetService: SheetService) {

    super(sheetService);
    this.template = new SheetTemplate();
    this.sheet = new Sheet(this.template);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initSheetAndTemplate();
  }

  private initSheetAndTemplate(): void {
    this.fetchTemplate();
    this.sheetService.sheetUpdated$.subscribe(any => this.fetchTemplate());
  }

  private fetchTemplate(): void {
    this.sheetService.getTemplate().then(template => this.setTemplate(template));
  }

  private setTemplate(template: SheetTemplate): void {
    this.template = template;
    this.sheetOrTemplateUpdated();
  }

  /**
   * Overwrite this method to be notified when the Sheet and/or Template where updated.
   */
  protected sheetOrTemplateUpdated(): void {

  }
}
