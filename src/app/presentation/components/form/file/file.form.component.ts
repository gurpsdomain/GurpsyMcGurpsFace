import {Component, Input, Output, ElementRef, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'gurpsy-file',
  templateUrl: './file.form.component.html',
  styleUrls: ['./file.form.component.scss']
})
export class FileFormComponent {

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
