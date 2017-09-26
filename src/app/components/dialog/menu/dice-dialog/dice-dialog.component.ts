import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'dice-dialog.component.html',
  styleUrls: ['dice-dialog.component.scss']
})
export class DiceDialogComponent implements AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  public ngAfterViewInit() {

  }

  public onRethrow(): void {
    console.log('Rethrowing');
  }

  private getCanvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

}
