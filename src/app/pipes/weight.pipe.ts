import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  private static WEIGHT_CONVERSION_FACTOR = 2.20462262185;

  transform(value: any, args?: any): any {
    return value + ' lbs';
  }
}
