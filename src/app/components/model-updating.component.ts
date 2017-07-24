import {Component, OnInit} from '@angular/core';
import {Sheet} from '../models/sheet/model/sheet.model';
import {ModelService} from '../services/front-end/model/model.service';
import {MdDialog} from '@angular/material';
import {LoggingService} from '../services/back-end/logging/logging.service';
import {Template} from '../models/sheet/template/template.model';

@Component({
  template: ''
})
export class ModelUpdatingComponent implements OnInit {

  editMode: boolean;
  model: Sheet;
  template: Template;

  constructor(protected dialog: MdDialog,
              protected modelService: ModelService,
              protected loggingService: LoggingService) {

    this.model = new Sheet(new Template());

  }

  ngOnInit(): void {
    this.fetchModels();
    this.modelService.modelChange$.subscribe(any => this.fetchModels());

    this.modelService.getEditMode().then(editMode => this.editMode = editMode);
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
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
   *
   */
  protected updateRequested(): void {
    this.openDialog();
  }

  /**
   * Override this method to open a dialog.
   *
   * @param {any} Data that should be passed to the dialog
   */
  protected openDialog(data?: any): void {
    this.loggingService.info('Open dialog called on a ModelUpdatingComponent, ' +
      'but no specific Dialog has been created.')
  }

  /**
   * Create a new template, based on the latest template.
   *
   * @param {Template} The template that should be used to create a new template.
   */
  protected updateModel(template: Template): void {
    if (template) {
      this.template = template;
      this.modelService.updateCurrentModel(this.template);
    }
  }

  private fetchModels(): void {
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
