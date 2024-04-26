import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

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

  openNavigateDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: {
        message: 'Do you want to navigate?',
        navigateTo: 'dummy',
        leftButton:{
          type:'close',
          text:'Close',
          style:'basic'
        },
        rightButton:{
          type:'navigate',
          text:'Navigate',
          style:'primary'
        }
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Navigate Dialog Closed');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: {
        message: 'Profile details updated successfully',
        type: 'success',
        leftButton:{
          type:'close',
          text:'No',
          style:'basic'
        },
        rightButton:{
          type:'confirm',
          text:'Save',
          style:'primary'
        },
        
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
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: {
        message: 'HelloWorld',
        type: 'warning',
        leftButton:{
          type:'close',
          text:'Close',
          style:'primary'
        },
      },
    });

    dialogRef.afterClosed().subscribe(() => {
        console.log('Alert Closed');
    });
  }
}
