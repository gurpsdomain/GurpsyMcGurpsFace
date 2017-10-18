import {UnitConverter} from './unit.converter';

describe('Custom converter (Unit Converter) for json2typescript ', () => {
  let unitConverter: UnitConverter;

  beforeEach(() => unitConverter = new UnitConverter());

  it('should be created', () => {
    expect(unitConverter).toBeTruthy();
  });
})
