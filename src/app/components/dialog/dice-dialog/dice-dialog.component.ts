import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import * as THREE from 'three';
import {Die} from '../../../models/die/die';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  private static TEXTURE_TABLE = 'assets/textures/walnut-tabletop.jpg';

  private static ROTATION_SPEED_X = 0.005;
  private static ROTATION_SPEED_Y = 0.01;
  private static CAMERA_Z = 400;
  private static FIELD_OF_VIEW = 70;
  private static NEAR_CLIPPING_PANE = 1;
  private static FAR_CLIPPING_PLANE = 1000;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private camera: THREE.PerspectiveCamera;
  private diceOne: THREE.Mesh;
  private diceTwo: THREE.Mesh;
  private diceThree: THREE.Mesh;
  private tableTop: THREE.Mesh;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;

  public ngAfterViewInit() {
    this.createScene();
    this.createCamera();
    this.createTableTop();
    this.createDice();
    this.startRenderingLoop();
  }

  public onRethrow(): void {
    console.log('Rethrowing');
  }


  private createScene() {
    this.scene = new THREE.Scene();
  }

  private createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      DiceDialogComponent.FIELD_OF_VIEW,
      this.getAspectRatio(),
      DiceDialogComponent.NEAR_CLIPPING_PANE,
      DiceDialogComponent.FAR_CLIPPING_PLANE
    );

    this.camera.position.z = DiceDialogComponent.CAMERA_Z;
    this.camera.position.y = 50;
    this.camera.rotation.x = -0.4;
  }

  private createDice(): void {
    this.diceOne = new Die(-110, -90, 0);
    this.scene.add(this.diceOne);
    this.diceTwo = new Die(0, 0, 0);
    this.scene.add(this.diceTwo);
    this.diceThree = new Die(120, 90, 0);
    this.scene.add(this.diceThree);
  }

  private createTableTop(): void {

    const tableTexture = new THREE.TextureLoader().load(DiceDialogComponent.TEXTURE_TABLE);
    const tableMaterial = new THREE.MeshBasicMaterial({map: tableTexture});

    const geometry = new THREE.PlaneGeometry(1024, 512);
    this.tableTop = new THREE.Mesh(geometry, tableMaterial);
    this.tableTop.position.set(0, -150, 0);
    this.tableTop.rotation.x = -Math.PI / 2;
    this.scene.add(this.tableTop);
  }

  private startRenderingLoop(): void {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    const component: DiceDialogComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateDice();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private animateDice(): void {
    this.diceOne.rotation.x += DiceDialogComponent.ROTATION_SPEED_X + DiceDialogComponent.ROTATION_SPEED_Y;
    this.diceOne.rotation.y += DiceDialogComponent.ROTATION_SPEED_Y;
    this.diceTwo.rotation.x += DiceDialogComponent.ROTATION_SPEED_X + DiceDialogComponent.ROTATION_SPEED_X;
    this.diceTwo.rotation.y += DiceDialogComponent.ROTATION_SPEED_Y;
    this.diceThree.rotation.x += DiceDialogComponent.ROTATION_SPEED_X;
    this.diceThree.rotation.y += DiceDialogComponent.ROTATION_SPEED_Y + DiceDialogComponent.ROTATION_SPEED_X;
  }

  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
}
