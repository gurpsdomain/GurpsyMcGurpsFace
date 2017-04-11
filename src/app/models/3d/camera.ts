import * as THREE from 'three';

export class Camera extends THREE.PerspectiveCamera {

  private static X = -0.4;
  private static Y = 50;
  private static Z = 400;
  private static FIELD_OF_VIEW = 70;
  private static NEAR_CLIPPING_PANE = 1;
  private static FAR_CLIPPING_PLANE = 1000;

  constructor(aspectRatio: number) {

    super(
      Camera.FIELD_OF_VIEW,
      aspectRatio,
      Camera.NEAR_CLIPPING_PANE,
      Camera.FAR_CLIPPING_PLANE
    );

    this.rotation.x = Camera.X;
    this.position.y = Camera.Y;
    this.position.z = Camera.Z;
  }
}
