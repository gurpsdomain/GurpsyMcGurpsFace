import {Settings} from './settings.model';

describe('Model Object Settings', () => {
  let settings: Settings;

  beforeEach(() => settings = new Settings());

  it('should be created', () => {
    expect(settings).toBeTruthy();
  });
});
