import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import * as THREE from 'three';
import {DiceFactory} from './factory/dice-factory';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  public static ROTATION_SPEED_X = 0.005;
  public static ROTATION_SPEED_Y = 0.01;
  public static CAMERA_Z = 400;
  public static FIELD_OF_VIEW = 70;
  public static NEAR_CLIPPING_PANE = 1;
  public static FAR_CLIPPING_PLANE = 1000;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private camera: THREE.PerspectiveCamera;
  private dice: THREE.Mesh;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;

  public ngAfterViewInit() {
    this.createScene();
    this.createDice();
    this.startRenderingLoop();
  }

  public onRethrow(): void {
    console.log('Rethrowing');
  }


  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private animateCube() {
    this.dice.rotation.x += DiceDialogComponent.ROTATION_SPEED_X;
    this.dice.rotation.y += DiceDialogComponent.ROTATION_SPEED_Y;
  }

  private createDice() {
    this.dice = new DiceFactory().createDice();
    this.scene.add(this.dice);
  }

  private createScene() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      DiceDialogComponent.FIELD_OF_VIEW,
      this.getAspectRatio(),
      DiceDialogComponent.NEAR_CLIPPING_PANE,
      DiceDialogComponent.FAR_CLIPPING_PLANE
    );

    this.camera.position.z = DiceDialogComponent.CAMERA_Z;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    const component: DiceDialogComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }
}
