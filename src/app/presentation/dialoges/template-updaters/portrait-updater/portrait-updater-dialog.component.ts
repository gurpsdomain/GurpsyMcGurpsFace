import {Component, OnInit, ViewChild} from '@angular/core';
import {TemplateUpdaterDialogComponent} from '../template-updater-dialog.component';
import {CropperSettings, ImageCropperComponent} from 'ngx-img-cropper';

@Component({
  templateUrl: './portrait-updater-dialog.component.html',
  styleUrls: ['./portrait-updater-dialog.component.scss']
})
export class PortraitUpdaterDialogComponent extends TemplateUpdaterDialogComponent implements OnInit {

  private static CANVAS_WIDTH = 352;
  private static CANVAS_HEIGHT = 300;
  private static CROPPER_WIDTH = 196;
  private static CROPPER_HEIGHT = 276;
  private static CROPPER_MIN_WIDTH = 25;
  private static CROPPER_MIN_HEIGHT = 30;

  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  ngOnInit(): void {
    this.initImageCropper();
  }

  public onOk(): void {
    this.template.portrait = this.data.image;
    super.onOk();
  }

  private initImageCropper(): void {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = PortraitUpdaterDialogComponent.CROPPER_WIDTH;
    this.cropperSettings.height = PortraitUpdaterDialogComponent.CROPPER_HEIGHT;

    this.cropperSettings.croppedWidth = PortraitUpdaterDialogComponent.CROPPER_WIDTH;
    this.cropperSettings.croppedHeight = PortraitUpdaterDialogComponent.CROPPER_HEIGHT;

    this.cropperSettings.canvasWidth = PortraitUpdaterDialogComponent.CANVAS_WIDTH;
    this.cropperSettings.canvasHeight = PortraitUpdaterDialogComponent.CANVAS_HEIGHT;

    this.cropperSettings.minWidth = PortraitUpdaterDialogComponent.CROPPER_MIN_WIDTH;
    this.cropperSettings.minHeight = PortraitUpdaterDialogComponent.CROPPER_MIN_HEIGHT;

    this.cropperSettings.rounded = false;
    this.cropperSettings.keepAspect = true;
    this.cropperSettings.preserveSize = true;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 1;
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.fileType = 'image/png';
    this.data = {};
  }

  public setFile(file: File): void {

    const fileReader: FileReader = new FileReader();
    const that = this;
    fileReader.onloadend = function (loadEvent: any) {
      const image: any = new Image();
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };

    fileReader.readAsDataURL(file);
  }
}
