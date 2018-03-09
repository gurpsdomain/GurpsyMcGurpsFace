import {MaterialFactory} from './material.factory';

describe('Material Factory', () => {
  let factory: MaterialFactory;

  beforeEach(() => factory = new MaterialFactory());

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
});
