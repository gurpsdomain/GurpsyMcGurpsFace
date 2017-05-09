import {Component, OnInit} from '@angular/core';
import {OutputModelService} from '../../../../services/model-read-service/output-model.service';
import {OutputSheet} from '../../../../models/sheet/output';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent implements OnInit {

  public sheet: OutputSheet;

  private modelReadService: OutputModelService;

  constructor(modelReadService: OutputModelService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
