import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Engine} from 'babylonjs';
import {Physics} from './scenes/physics';

@Component({
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private game: Physics;

  public ngAfterViewInit() {
    this.game = new Physics('renderCanvas');
    this.game.createScene();

    this.game.animate();
  }

  public onRethrow(): void {
    this.game.animate();
  }
}
