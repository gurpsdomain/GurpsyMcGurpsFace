import * as THREE from 'three';

export class Die extends THREE.Mesh {

  private static SIZE = 50;
  private static TEXTURE_FACE_ONE = 'assets/textures/dice-1.png';
  private static TEXTURE_FACE_TWO = 'assets/textures/dice-2.png';
  private static TEXTURE_FACE_THREE = 'assets/textures/dice-3.png';
  private static TEXTURE_FACE_FOUR = 'assets/textures/dice-4.png';
  private static TEXTURE_FACE_FIVE = 'assets/textures/dice-5.png';
  private static TEXTURE_FACE_SIX = 'assets/textures/dice-6.png';

  private rotationSpeedX: number;
  private rotationSpeedY: number;

  constructor(x: number, y: number, z: number) {

    const geometry = new THREE.BoxBufferGeometry(Die.SIZE, Die.SIZE, Die.SIZE);

    const textureFaceOne = new THREE.TextureLoader().load(Die.TEXTURE_FACE_ONE);
    const textureFaceTwo = new THREE.TextureLoader().load(Die.TEXTURE_FACE_TWO);
    const textureFaceThree = new THREE.TextureLoader().load(Die.TEXTURE_FACE_THREE);
    const textureFaceFour = new THREE.TextureLoader().load(Die.TEXTURE_FACE_FOUR);
    const textureFaceFive = new THREE.TextureLoader().load(Die.TEXTURE_FACE_FIVE);
    const textureFaceSix = new THREE.TextureLoader().load(Die.TEXTURE_FACE_SIX);

    const material = [
      new THREE.MeshBasicMaterial({map: textureFaceOne}),
      new THREE.MeshBasicMaterial({map: textureFaceSix}),
      new THREE.MeshBasicMaterial({map: textureFaceTwo}),
      new THREE.MeshBasicMaterial({map: textureFaceFive}),
      new THREE.MeshBasicMaterial({map: textureFaceThree}),
      new THREE.MeshBasicMaterial({map: textureFaceFour})
    ];

    super(geometry, new THREE.MultiMaterial(material));

    this.position.set(x, y, z);

    this.rotationSpeedX = 0.01;
    this.rotationSpeedY = 0.02;
  }

  public rotate(): void {
    this.rotation.x += this.rotationSpeedX;
    this.rotation.y += this.rotationSpeedY;
  }
}
