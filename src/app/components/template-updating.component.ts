import {Component, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/model/sheet.model';
import {ModelService} from '../services/front-end/model/model.service';
import {ComponentType, MdDialog, MdDialogRef} from '@angular/material';
import {Template} from '../models/sheet/template/template.model';
import {TemplateUpdaterDialogComponent} from './dialog/template-updaters/template-updater-dialog.component';
import {GurpsyComponent} from '../gurpsy.component';

@Component({
  template: ''
})
export class TemplateUpdatingComponent<T extends TemplateUpdaterDialogComponent> implements OnInit {

  protected dialogRef: MdDialogRef<T>;
  protected dialogType: ComponentType<T>;

  editMode: boolean;
  model: Sheet;
  template: Template;

  constructor(protected dialog: MdDialog,
              protected modelService: ModelService) {

    this.model = new Sheet(new Template());
  }

  ngOnInit(): void {
    this.initModelAndTemplate();
    this.initEditMode();
    this.setComponentType();
  }

  /**
   * When extending this class, overwrite this method and assign the appropriate dialogType.
   */
  protected setComponentType(): void {
    this.dialogType = undefined;
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

  private setupDialog() {
    this.dialogRef = this.dialog.open(this.dialogType, {
      disableClose: false,
      width: GurpsyComponent.DIALOG_WIDTH
    });
  }

  private setDialogClosingBehaviour() {
    this.dialogRef.afterClosed().subscribe(template => {
        this.updateTemplate(template);
        this.dialogRef = null
      }
    );
  }

  protected updateTemplate(template: Template): void {
    if (template) {
      this.template = template;
      this.modelService.updateCurrentTemplate(this.template);
    }
  }

  private initModelAndTemplate(): void {
    this.fetchModelAndTemplate();
    this.modelService.modelChange$.subscribe(any => this.fetchModelAndTemplate());
  }

  private initEditMode(): void {
    this.modelService.getEditMode().then(editMode => this.editMode = editMode);
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }

  private fetchModelAndTemplate(): void {
    this.modelService.getModel().then(sheet => this.setModel(sheet));
    this.modelService.getTemplate().then(template => this.setTemplate(template));
  }

  private setModel(readModel: Sheet): void {
    this.model = readModel;
  }

  private setTemplate(template: Template): void {
    this.template = template;
  }
}
