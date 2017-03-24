import {Component, OnInit} from '@angular/core';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {Sheet} from '../../../../model/sheet';

@Component({
  selector: 'gurpsy-advantages-component',
  templateUrl: 'advantages.component.html',
  styleUrls: ['./advantages.component.scss',
    '../../sheet.component.scss'
  ]
})
export class AdvantagesComponent implements OnInit {

  public sheet: Sheet;
  private modelReadService: ModelReadService;

  constructor(modelReadService: ModelReadService) {
    this.modelReadService = modelReadService;
  }

  ngOnInit(): void {
    this.sheet = this.modelReadService.getSheet();
    this.modelReadService.modelChange$.subscribe(sheet => this.sheet = sheet);
  }
}