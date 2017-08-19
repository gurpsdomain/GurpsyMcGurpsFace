import {JsonConverter, JsonCustomConvert} from 'json2typescript';

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {

  serialize(date: Date): any {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  deserialize(date: any): Date {
    return new Date(date);
  }
}
