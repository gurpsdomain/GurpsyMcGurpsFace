import {Component, Input} from '@angular/core';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';
import {TemplateViewingComponent} from '../../template-viewing.component';
import {GurpsyConstants} from '../../../../gurpsy.constants';
import {TranslateService} from '@ngx-translate/core';
import {SheetService} from '../../../../services/sheet/sheet.service';

@Component({
  selector: 'gurpsy-weight-display',
  templateUrl: './weight-display.component.html'
})
export class WeightDisplayComponent extends TemplateViewingComponent {

  @Input()
  public weight: number;
  public unit = Unit;
  public alternativeUnitValue: string;

  constructor(sheetService: SheetService,
              private translate: TranslateService) {
    super(sheetService);
  }

  protected sheetOrTemplateUpdated(): void {
    if (this.sheet && this.template) {
      this.setAlternativeUnitValue();
    }
  }

  private setAlternativeUnitValue(): void {
    if (this.template && this.sheet) {

      this.setConvertedWeight();
      this.addUnit();
    }
  }

  private setConvertedWeight() {
    const currentWeight = this.sheet.metaData.description.weight;

    let weightInAlternativeUnit = currentWeight;

    switch (this.template.metaData.unit) {
      case Unit.IMPERIAL:
        weightInAlternativeUnit = currentWeight * GurpsyConstants.UNIT_WEIGHT_POUNDS_TO_KG_CONVERSION_FACTOR;
        break;
      case Unit.METRIC:
        weightInAlternativeUnit = currentWeight / GurpsyConstants.UNIT_WEIGHT_POUNDS_TO_KG_CONVERSION_FACTOR;
        break;
    }

    this.alternativeUnitValue = weightInAlternativeUnit.toFixed(0);
  }

  private addUnit(): void {
    switch (this.template.metaData.unit) {
      case Unit.IMPERIAL:
        this.translate.get('UNIT.METRIC.WEIGHT').subscribe((res: string) => {
          this.addUnitToWeight(res)
        });
        break;
      case Unit.METRIC:
        this.translate.get('UNIT.IMPERIAL.WEIGHT').subscribe((res: string) => {
          this.addUnitToWeight(res)
        });
        break;
    }
  }

  private addUnitToWeight(unit: String): void {
    this.alternativeUnitValue = this.alternativeUnitValue + ' ' + unit;
  }
}


