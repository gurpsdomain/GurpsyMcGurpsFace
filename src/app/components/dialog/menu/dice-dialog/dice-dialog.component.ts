import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as WHS from 'whs';

@Component({
  templateUrl: 'dice-dialog.component.html',
  styleUrls: ['dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  private app: WHS.App;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  public ngAfterViewInit() {
    const app = new WHS.App([
      new WHS.ElementModule(this.getCanvas()),
      new WHS.SceneModule()
    ]);

  }

  public onRethrow(): void {
    console.log('Rethrowing');

    this.app.start();
  }

  private getCanvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

}
