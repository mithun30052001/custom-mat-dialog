import { Component, Inject } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = VERSION;

  constructor(private dialog: MatDialog) {}

  public constructDialog<T>(TCtor: new (data: any, dialogRef: MatDialogRef<T, any>) => T, data: any): MatDialogRef<T, any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(TCtor, { ...dialogConfig, data });
    return dialogRef;
 }


 openGenericDialog() {
   const dialogRef = this.constructDialog(ConfirmationDialogComponent, {
     message: 'Are you sure want to delete?',
     buttonText: {
       ok: 'Save',
       cancel: 'No'
     }
   });
 }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('User confirmed deletion');
      } else {
        console.log('User canceled deletion');
      }
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        },
        buttonType: 'primary',
        icon: 'warning'
      },
    });
  }
}
