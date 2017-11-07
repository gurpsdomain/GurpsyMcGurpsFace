import {DateConverter} from './date.converter';

describe('Custom converter (Date Converter) for json2typescript ', () => {
  let dateConverter: DateConverter;

  beforeEach(() => dateConverter = new DateConverter());

  it('should be created', () => {
    expect(dateConverter).toBeTruthy();
  });

  it('should serialize a date to the form yyyy-MM-dd', () => {
    const today = new Date();

    const serializedToday = dateConverter.serialize(today);
    const expectedDate = today.getFullYear() + '-' + (today.getMonth() + 1)
      + '-' + today.getDate();

    expect(serializedToday).toBe(expectedDate);
  });

  it('should deserialize a date of the form yyyy-MM-dd', () => {
    const today = new Date();
    const toDeserializeDate = today.getFullYear() + '-' + (today.getMonth() + 1)
      + '-' + today.getDate();

    const deserializeddate = dateConverter.deserialize(toDeserializeDate);

    expect(deserializeddate.toDateString()).toBe(today.toDateString());
  });
});
