import {DieFactory} from './die.factory';

describe('Die Factory', () => {
  let factory: DieFactory;

  beforeEach(() => factory = new DieFactory());

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
});
