import {Component, OnInit} from '@angular/core';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';
import {ModelService} from '../services/front-end/model/model.service';
import {MdDialog} from '@angular/material';
import {LoggingService} from '../services/back-end/logging/logging.service';

@Component({
  template: ''
})
export class ModelUpdatingComponent implements OnInit {

  editMode: boolean;
  readSheet: ReadSheet;

  constructor(protected dialog: MdDialog,
              protected modelService: ModelService,
              protected loggingService: LoggingService) {
  }

  ngOnInit(): void {
    this.readSheet = this.modelService.getOutputModel();
    this.modelService.outputModelChange$.subscribe(readSheet => this.readSheet = readSheet);

    this.editMode = this.modelService.editMode;
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }

  public onRequestUpdate(): void {
    if (this.editMode) {
      this.updateRequested();
    }
  }

  public updateRequested(): void {
    this.openDialog();
  }

  /**
   * Override this method to open a dialog.
   *
   * @param {any} Data that should be passed to the dialog
   */
  public openDialog(data?: any): void {
    this.loggingService.info('Open dialog called on a ModelUpdatingComponent.')
  }
}
