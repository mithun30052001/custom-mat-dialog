import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NavigationDialogComponent } from './navigation-dialog/navigation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  public constructDialog<T>(TCtor: new (data: any, dialogRef: MatDialogRef<T, any>) => T, data: any): MatDialogRef<T, any> {
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
        route: route
      }
    });
  }

  openGenericDialog() {
    const dialogRef = this.constructDialog(ConfirmationDialogComponent, {
      message: 'Are you sure want to do this?',
      buttonText: {
        ok: 'Yes',
        cancel: 'No'
      }
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

    dialogRef.afterClosed().subscribe(() => {
        console.log('Alert Closed');
    });
  }
}
