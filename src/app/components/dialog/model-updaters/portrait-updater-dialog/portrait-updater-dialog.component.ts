import {Component, ViewChild, OnInit} from '@angular/core';
import {CropperSettings, ImageCropperComponent} from 'ng2-img-cropper';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: 'portrait-updater-dialog.component.html',
  styleUrls: ['portrait-updater-dialog.component.scss']
})
export class PortraitUpdaterDialogComponent implements OnInit {

  data: any;
  data1: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  constructor(private dialogRef: MdDialogRef<PortraitUpdaterDialogComponent>) {
  }

  ngOnInit(): void {
    this.initImageCropper();
  }

  fileChangeListener($event) {
    const file: File = $event.target.files[0];

    this.setFile(file);
  }

  public onOk(): void {
    console.log('New portrait selected: ', this.data1.image);
    this.dialogRef.close();
  }

  private initImageCropper(): void {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 104;
    this.cropperSettings.height = 138;

    this.cropperSettings.croppedWidth = 104;
    this.cropperSettings.croppedHeight = 138;

    this.cropperSettings.canvasWidth = 352;
    this.cropperSettings.canvasHeight = 300;

    this.cropperSettings.minWidth = 10;
    this.cropperSettings.minHeight = 10;

    this.cropperSettings.rounded = false;
    this.cropperSettings.keepAspect = true;
    this.cropperSettings.preserveSize = true;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
    this.cropperSettings.fileType = 'image/png';
    this.data1 = {};
  }

  public setFile(file: File): void {

    if (this.cropper) {
      const myReader: FileReader = new FileReader();
      const that = this;
      myReader.onloadend = function (loadEvent: any) {
        const image: any = new Image();
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);

      };

      myReader.readAsDataURL(file);
    }
  }
}
