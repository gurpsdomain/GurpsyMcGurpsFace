import {CameraFactory} from './camera.factory';

describe('Camera Factory', () => {
  let factory: CameraFactory;

  beforeEach(() => factory = new CameraFactory());

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });
});
