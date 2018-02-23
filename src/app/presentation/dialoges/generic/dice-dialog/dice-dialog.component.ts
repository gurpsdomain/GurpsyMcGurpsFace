import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Engine} from 'babylonjs';
import {DiceThrower} from './scene/dice-thrower';

@Component({
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private game: DiceThrower;

  public ngAfterViewInit() {
    this.game = new DiceThrower('renderCanvas');
    this.game.createScene();

    this.game.animate();
  }

  public onRethrow(): void {
    this.game.retrow();
  }
}
