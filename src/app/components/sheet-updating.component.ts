import {Component, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/model/sheet.model';
import {TemplateDM} from '../models/sheet/template/template.model';
import {TemplateUpdaterDialogComponent} from './dialog/template-updaters/template-updater-dialog.component';
import {SheetService} from '../services/front-end/sheet/sheet.service';
import {SheetViewingComponent} from './sheet-viewing.component';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ComponentType} from '@angular/cdk';
import {GurpsyConstants} from '../gurpsy.constants';

@Component({
  template: ''
})
export class SheetUpdatingComponent<T extends TemplateUpdaterDialogComponent> extends SheetViewingComponent implements OnInit {

  protected dialogRef: MdDialogRef<T>;
  protected dialogType: ComponentType<T>;

  editMode: boolean;
  sheet: Sheet;
  template: TemplateDM;

  /**
   * Create a new SheetUpdatingComponent that will open a Dialog of type T.
   *
   * @param {MdDialog} dialog
   * @param {SheetService} sheetService
   * @param {ComponentType<T extends TemplateUpdaterDialogComponent>} dialogType
   */
  constructor(private dialog: MdDialog,
              sheetService: SheetService) {

    super(sheetService);
    this.sheet = new Sheet(new TemplateDM());
    this.setComponentType()
  }

  /**
   * When extending this class, overwrite this method and assign the appropriate dialogType.
   */
  protected setComponentType(): void {
    this.dialogType = undefined;
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.initSheetAndTemplate();
    this.initEditMode();
  }

  /**
   * A component has received a click event and requests an update. If we are currently
   * in update mode, updateRequested() is being called.
   */
  public onRequestUpdate(): void {
    if (this.editMode) {
      this.updateRequested();
    }
  }

  /**
   * An update is requested. In general this means that OpenDialog is being
   * called.
   */
  protected updateRequested(): void {
    this.openDialog();
  }

  /**
   * Override this method to open a custom dialog.
   *
   * @param {any} Data that should be passed to the dialog
   */
  protected openDialog(data?: any): void {
    this.setupDialog();
    this.addDataToDialog(data);
    this.setDialogClosingBehaviour();
  }

  /**
   * To add more data to the dialog, override this method in a subclass and call super.
   *
   * @param {any} The data to pass to this dialog
   */
  protected addDataToDialog(data?: any) {
    if (data) {
      this.dialogRef.componentInstance.data = data;
    }
    this.dialogRef.componentInstance.template = this.template;
  }

  /**
   * Update the template with the new template.
   *
   * @param {TemplateDM} The new template
   */
  protected updateTemplate(template: TemplateDM): void {
    if (template) {
      this.setTemplate(template)
      this.sheetService.updateTemplate(this.template);
    }
  }

  private setupDialog() {
    this.dialogRef = this.dialog.open(this.dialogType, {
      disableClose: false,
      width: GurpsyConstants.DIALOG_WIDTH
    });
  }

  private setDialogClosingBehaviour() {
    this.dialogRef.afterClosed().subscribe(template => {
        this.updateTemplate(template);
        this.dialogRef = null
      }
    );
  }

  private initSheetAndTemplate(): void {
    this.fetchTemplate();
    this.sheetService.sheetUpdated$.subscribe(any => this.fetchTemplate());
  }

  private initEditMode(): void {
    this.sheetService.getEditMode().then(editMode => this.editMode = editMode);
    this.sheetService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }

  private fetchTemplate(): void {
    this.sheetService.getTemplate().then(template => this.setTemplate(template));
  }

  private setTemplate(template: TemplateDM): void {
    this.template = template;
  }
}
