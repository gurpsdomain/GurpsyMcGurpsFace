import {Component, OnInit} from '@angular/core';
import {ModelService} from '../services/front-end/model/model.service';
import {ReadSheet} from '../models/sheet/read/read-sheet.model';
import {UpdateSheet} from '../models/sheet/update/update-sheet.model';

@Component({
  template: ''
})
export class ModelReadingComponent implements OnInit {

  public readSheet: ReadSheet;

  constructor(protected modelService: ModelService) {
    this.readSheet = new ReadSheet(new UpdateSheet());
  }

  ngOnInit(): void {
    this.fetchReadModel()
    this.modelService.modelChange$.subscribe(readModel => this.fetchReadModel());
  }

  private fetchReadModel() {
    this.modelService.getReadModel().then(readModel => this.readSheet = readModel);
  }
}
