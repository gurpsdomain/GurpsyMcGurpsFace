import {AfterViewInit, Component} from '@angular/core';
import {Engine} from 'babylonjs';
import {DiceThrower} from './scene/dice-thrower';

@Component({
  templateUrl: './dice-dialog.component.html',
  styleUrls: ['./dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  private game: DiceThrower;

  public ngAfterViewInit() {
    this.game = new DiceThrower('renderCanvas');
    this.game.createScene();
  }

  public onRethrow(): void {
    this.game.retrow();
  }
}
