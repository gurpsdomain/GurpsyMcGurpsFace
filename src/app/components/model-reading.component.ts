import {Component, OnInit} from '@angular/core';
import {ModelService} from '../services/front-end/model/model.service';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';

@Component({
  template: ''
})
export class ModelReadingComponent implements OnInit {

  public readSheet: ReadSheet;

  constructor(protected modelService: ModelService) {
    this.readSheet = new ReadSheet();
  }

  ngOnInit(): void {
    this.modelService.getReadtModel().then(readModel => this.readSheet = readModel);
    this.modelService.readModelChange$.subscribe(readSheet => this.readSheet = readSheet);
  }
}
