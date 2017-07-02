import {Component, OnInit} from '@angular/core';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';
import {ModelReadingComponent} from './model-reading.component';

@Component({
  template: ''
})
export class ModelUpdatingComponent extends ModelReadingComponent implements OnInit {

  public editMode: boolean;
  public readSheet: ReadSheet;

  ngOnInit(): void {
    super.ngOnInit();

    this.editMode = this.modelService.editMode;
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }
}
