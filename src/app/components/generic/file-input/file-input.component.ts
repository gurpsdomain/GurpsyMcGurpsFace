import {Component, Input, Output, ElementRef, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'gurpsy-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['file-input.component.scss']
})
export class FileInputComponent {

  @ViewChild('inputFile') nativeInputFile: ElementRef;

  @Input() accept: string;
  @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();

  private _files: File[];

  public onNativeInputFileSelect($event): void {
    this._files = $event.srcElement.files;
    this.onFileSelect.emit(this._files);
  }

  public selectFile(): void {
    this.nativeInputFile.nativeElement.click();
  }

  get fileCount(): number {
    return this._files && this._files.length || 0;
  }
}
