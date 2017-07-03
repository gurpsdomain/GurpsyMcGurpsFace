import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import * as THREE from 'three';
import {Die} from '../../../../models/3d/die';
import {Table} from '../../../../models/3d/table';
import {Camera} from '../../../../models/3d/camera';

@Component({
  templateUrl: 'dice-dialog.component.html',
  styleUrls: ['dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  public ngAfterViewInit() {
    const scene = this.createScene();
    this.addTable(scene);
    const dice = this.addDice(scene);
    const camera = this.addCamera();
    const renderer = this.createRenderer();
    this.startRenderingLoop(scene, camera, dice, renderer);
  }

  public onRethrow(): void {
    console.log('Rethrowing');
  }

  private createScene() {
    return new THREE.Scene();
  }

  private addDice(scene: THREE.Scene): Array<Die> {
    const dice = new Array<Die>();


    const diceOne = new Die(-110, -90, 0);
    scene.add(diceOne);
    dice.push(diceOne);

    const diceTwo = new Die(0, 0, 0);
    scene.add(diceTwo);
    dice.push(diceTwo);

    const diceThree = new Die(120, 90, 0);
    scene.add(diceThree);
    dice.push(diceThree);

    return dice;
  }

  private addTable(scene: THREE.Scene): void {
    scene.add(new Table());
  }

  private addCamera() {
    return new Camera(this.getAspectRatio());
  }

  private createRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({canvas: this.getCanvas(), alpha: true});
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(this.getCanvas().clientWidth, this.getCanvas().clientHeight);

    return renderer;
  }

  private startRenderingLoop(scene: THREE.Scene, camera: THREE.Camera, dice: Array<Die>, renderer: THREE.WebGLRenderer): void {
    const component: DiceDialogComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateDice(dice);
      renderer.render(scene, camera);
    }());
  }

  private animateDice(dice: Array<Die>): void {
    for (const die of dice) {
      die.rotate();
    }
  }

  private getCanvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private getAspectRatio(): number {
    return this.getCanvas().clientWidth / this.getCanvas().clientHeight;
  }
}
