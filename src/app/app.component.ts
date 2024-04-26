import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationDialogComponent } from './navigation-dialog/navigation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  public constructDialog<T>(TCtor: new (data: any, dialogRef: MatDialogRef<T, any>,sanitizer: DomSanitizer) => T, data: any): MatDialogRef<T, any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(TCtor, { ...dialogConfig, data });
    return dialogRef;
  }

  openNavigateDialog(route: string) {
    const dialogRef = this.dialog.open(NavigationDialogComponent, {
      data: {
        message: 'Do you want to navigate?',
        buttonText: {
          navigate: 'Navigate',
          close: 'Close'
        },
        route: route,
        navigateButtonType: 'primary',
        closeButtonType: 'basic',
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Navigate Dialog Closed');
    });
  }

  openGenericDialog() {
    const dialogRef = this.constructDialog(ConfirmationDialogComponent, {
      message: 'Are you sure want to do this?',
      buttonText: {
        ok: 'Yes',
        cancel: 'No'
      },
      okButtonType: 'primary',
      cancelButtonType: 'basic',
      icon: 'success',
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          console.log('User clicked Yes');
        } else {
          console.log('User clicked No');
        }
     
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Profile details updated successfully',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        },
        okButtonType: 'primary',
        cancelButtonType: 'basic',
        icon: 'success',
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        console.log('User confirmed updation');
      } else {
        console.log('User canceled updation');
      }
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Close'
        },
        buttonType: 'primary',
        icon: 'warning'
      },
    });

    dialogRef.afterClosed().subscribe(() => {
        console.log('Alert Closed');
    });
  }
}
