import {Component, Input} from '@angular/core';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';
import {TemplateViewingComponent} from '../../template-viewing.component';

@Component({
  selector: 'gurpsy-weight-display',
  templateUrl: './weight-display.component.html',
  styleUrls: ['./weight-display.component.scss']
})
export class WeightDisplayComponent extends TemplateViewingComponent {

  @Input()
  public weight: number;
  public unit = Unit;
}
