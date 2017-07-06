import {Component, OnInit} from '@angular/core';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';
import {ModelService} from '../services/front-end/model/model.service';
import {MdDialog} from '@angular/material';
import {LoggingService} from '../services/back-end/logging/logging.service';
import {UpdateSheet} from '../models/sheet/update/update-sheet.model';

@Component({
  template: ''
})
export class ModelUpdatingComponent implements OnInit {

  editMode: boolean;
  readSheet: ReadSheet;
  updateSheet: UpdateSheet;

  constructor(protected dialog: MdDialog,
              protected modelService: ModelService,
              protected loggingService: LoggingService) {

    this.readSheet = new ReadSheet()
    this.updateSheet = new UpdateSheet();
  }

  ngOnInit(): void {
    this.modelService.getReadtModel().then(readModel => this.readSheet = readModel);
    this.modelService.readModelChange$.subscribe(readSheet => this.readSheet = readSheet);

    this.modelService.getUpdateModel().then(updateModel => this.updateSheet = updateModel);
    this.modelService.updateModelChange$.subscribe(updateSheet => this.updateSheet = updateSheet);

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
    this.loggingService.info('Open dialog called on a ModelUpdatingComponent.')
  }

  /**
   * Update the model with the current updateModel.
   */
  protected updateModel(): void {
    this.modelService.updateCurrentModel(this.updateSheet);
  }
}
