import {Component, OnInit} from '@angular/core';
import {ModelService} from '../services/front-end/model/model.service';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';

@Component({
  template: ''
})
export class ModelReadingComponent implements OnInit {

  public readSheet: ReadSheet;

  constructor(protected modelService: ModelService) {
  }

  ngOnInit(): void {
    this.readSheet = this.modelService.getOutputModel();
    this.modelService.outputModelChange$.subscribe(readSheet => this.readSheet = readSheet);
  }
}
