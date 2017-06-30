import { Component, OnInit } from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output/output.sheet.model';

@Component({
  selector: 'gurpsy-skills',
  templateUrl: 'skills.component.html',
  styleUrls: [
    './skills.component.scss',
    '../../sheet.component.scss'
  ]
})
export class SkillsComponent implements OnInit {

  public sheet: OutputSheet;

  constructor(private modelReadService: ModelService) {
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getOutputModel();
    this.modelReadService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
