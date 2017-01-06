import {Component, Output, EventEmitter} from '@angular/core';
import {DeleteSettingsDialogComponent} from '../dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'gurpsy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private deleteSettingsDialogRef: MdDialogRef<DeleteSettingsDialogComponent>;

  public dialog: MdDialog;

  @Output() onOpenSideNavigation: EventEmitter<any> = new EventEmitter();

  constructor(dialog: MdDialog) {
    this.dialog = dialog;
  }

  onOpenSideNav(): void {
    this.onOpenSideNavigation.next();
  }

  onOpenSheetDialog(): void {
    console.log('Opening Sheet Dialog');
  }

  onOpenDeleteSettingsDialog(): void {
    this.deleteSettingsDialogRef = this.dialog.open(DeleteSettingsDialogComponent, {
      disableClose: false
    });

    this.deleteSettingsDialogRef.afterClosed().subscribe(result => {
      this.deleteSettingsDialogRef = null;
    });
  }
}
