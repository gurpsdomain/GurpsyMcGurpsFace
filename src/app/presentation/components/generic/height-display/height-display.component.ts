import {Component, Input} from '@angular/core';
import {Unit} from '../../../../models/sheet-template/metadata/enums/unit';
import {TemplateViewingComponent} from '../../template-viewing.component';
import {GurpsyConstants} from '../../../../gurpsy.constants';
import {TranslateService} from '@ngx-translate/core';
import {SheetService} from '../../../../services/sheet/sheet.service';

@Component({
  selector: 'gurpsy-height-display',
  templateUrl: './height-display.component.html'
})
export class HeightDisplayComponent extends TemplateViewingComponent {

  @Input()
  public height: number;
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
    const currentHeight = this.sheet.metaData.description.height;

    let heightInAlternativeUnit = currentHeight;

    switch (this.template.metaData.unit) {
      case Unit.IMPERIAL:
        heightInAlternativeUnit = currentHeight * GurpsyConstants.UNIT_HEIGHT_INCHES_TO_METER_CONVERSION_FACTOR;
        break;
      case Unit.METRIC:
        heightInAlternativeUnit = currentHeight / GurpsyConstants.UNIT_HEIGHT_INCHES_TO_METER_CONVERSION_FACTOR;
        break;
    }

    this.alternativeUnitValue = heightInAlternativeUnit.toFixed(2);
  }

  private addUnit(): void {
    switch (this.template.metaData.unit) {
      case Unit.IMPERIAL:
        this.translate.get('UNIT.METRIC.HEIGHT').subscribe((res: string) => {
          this.addUnitToHeight(res)
        });
        break;
      case Unit.METRIC:
        this.translate.get('UNIT.IMPERIAL.HEIGHT').subscribe((res: string) => {
          this.addUnitToHeight(res)
        });
        break;
    }
  }

  private addUnitToHeight(unit: String): void {
    this.alternativeUnitValue = this.alternativeUnitValue + ' ' + unit;
  }
}


