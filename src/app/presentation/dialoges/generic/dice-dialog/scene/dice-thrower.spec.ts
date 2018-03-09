
import {DiceThrower} from './dice-thrower';

describe('Dice Thrower', () => {
  let diceThrower: DiceThrower;

  beforeEach(() => diceThrower = new DiceThrower('renderCanvas'));

  it('should be created', () => {
    expect(diceThrower).toBeTruthy();
  });
});
