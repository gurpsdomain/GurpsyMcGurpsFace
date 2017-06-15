import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' lbs';
  }
}
