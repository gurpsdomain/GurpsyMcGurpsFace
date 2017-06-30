import {Component, OnInit} from '@angular/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {OutputSheet} from '../../../../models/sheet/output/output.sheet.model';

@Component({
  selector: 'gurpsy-portrait',
  templateUrl: 'portrait.component.html',
  styleUrls: ['../../sheet.component.scss',
    'portrait.component.scss'
  ]
})
export class PortraitComponent implements OnInit {

  public sheet: OutputSheet;
  public editMode: boolean;

  constructor(private modelService: ModelService) {
  }

  ngOnInit(): void {
    this.initModel();
    this.initEditMode();
  }

  private initEditMode(): void {
    this.editMode = this.modelService.editMode;
    this.modelService.editModeChange$.subscribe(editMode => this.editMode = editMode);
  }

  private initModel(): void {
    this.sheet = this.modelService.getOutputModel();
    this.modelService.outputModelChange$.subscribe(sheet => this.sheet = sheet);
  }
}
