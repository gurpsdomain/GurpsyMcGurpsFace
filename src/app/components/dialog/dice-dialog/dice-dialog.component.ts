import {Component, ViewChild, AfterViewInit, Input, ElementRef} from '@angular/core';
import * as THREE from 'three';
import {DiceFactory} from './factory/dice-factory';

@Component({
  selector: 'gurpsy-delete-settings-dialog',
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  private camera: THREE.PerspectiveCamera;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private dice: THREE.Mesh;

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  @Input()
  public rotationSpeedX = 0.005;

  @Input()
  public rotationSpeedY = 0.01;

  @Input()
  public cameraZ = 400;

  @Input()
  public fieldOfView = 70;

  @Input()
  public nearClippingPane = 1;

  @Input()
  public farClippingPane = 1000;

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
    this.dice.rotation.x += this.rotationSpeedX;
    this.dice.rotation.y += this.rotationSpeedY;
  }

  private createDice() {
    this.dice = new DiceFactory().createDice();
    this.scene.add(this.dice);
  }

  private createScene() {
    /* Scene */
    this.scene = new THREE.Scene();

    /* Camera */
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
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
