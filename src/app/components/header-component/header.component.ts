import {Component, Output, EventEmitter} from '@angular/core';
import {DeleteSettingsDialogComponent} from '../dialog-component/delete-settings-dialog/delete-settings-dialog.component';
import {MdDialog, MdDialogRef} from '@angular/material';
import {OpenSheetDialogComponent} from '../dialog-component/open-sheet-dialog/open-sheet-dialog.component';

@Component({
  selector: 'gurpsy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private openSheetDialogRef: MdDialogRef<OpenSheetDialogComponent>;
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
    this.openSheetDialogRef = this.dialog.open(OpenSheetDialogComponent, {
      disableClose: false
    });

    this.openSheetDialogRef.afterClosed().subscribe(
      this.openSheetDialogRef = null
    );
  }

  onOpenDeleteSettingsDialog(): void {
    this.deleteSettingsDialogRef = this.dialog.open(DeleteSettingsDialogComponent, {
      disableClose: false
    });

    this.deleteSettingsDialogRef.afterClosed().subscribe(
      this.deleteSettingsDialogRef = null
    );
  }
}
