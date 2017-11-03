import {Component, Input, OnInit} from '@angular/core';
import {Weight} from '../../../../models/sheet/units/weight/weight.model';
import {WeightUnit} from '../../../../models/sheet/units/weight/weight.enum';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'gurpsy-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {

  @Input() weight: Weight;

  weightUnit = WeightUnit;
  alternativeUnit: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.initUnit();
  }

  private initUnit() {
    let localeKey: string;

    if (this.weight && this.weight.unit === WeightUnit.KG) {
      localeKey = 'UNIT.IMPERIAL.WEIGHT';
    } else {
      localeKey = 'UNIT.WEIGHT.WEIGHT';
    }

    this.translate.get(localeKey).subscribe((unit: string) => {
      this.alternativeUnit = unit;
    });
  }
}
