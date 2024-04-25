// app.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '650px',
      data: {
        title: 'Confirmation',
        message: 'Do you want to try again?',
        buttonLabels: ['Try Again', 'Close'],
        buttonTypes: ['primary', 'basic'],
        icon: 'warning'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
