import {DiceTrayFactory} from './dice-tray.factory';

describe('Dice Tray Factory', () => {
  let factory: DiceTrayFactory;

  beforeEach(() => factory = new DiceTrayFactory());

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
});
