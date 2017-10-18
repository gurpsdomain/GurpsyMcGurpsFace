import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {Unit} from '../../../../models/settings/enums/unit.enum';

@JsonConverter
export class UnitConverter implements JsonCustomConvert<Unit> {

  serialize(unit: Unit): any {
    return unit;
  }

  deserialize(unit: number): Unit {
    return unit;
  }
}
