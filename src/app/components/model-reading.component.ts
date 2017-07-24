import {Component, OnInit} from '@angular/core';
import {ModelService} from '../services/front-end/model/model.service';
import {Sheet} from '../models/sheet/model/sheet.model';
import {Template} from '../models/sheet/template/template.model';

@Component({
  template: ''
})
export class ModelReadingComponent implements OnInit {

  public model: Sheet;

  constructor(protected modelService: ModelService) {
    this.model = new Sheet(new Template());
  }

  ngOnInit(): void {
    this.fetchReadModel()
    this.modelService.modelChange$.subscribe(readModel => this.fetchReadModel());
  }

  private fetchReadModel() {
    this.modelService.getModel().then(sheet => this.model = sheet);
  }
}
