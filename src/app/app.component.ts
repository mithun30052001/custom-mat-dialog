import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openMessageDialog(message: string): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '650px',
      data: {
        title: 'Message',
        message: message,
        actions: [{ label: 'Close', type: 'basic' }]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with action:', result);
    });
  }

  openNavigateDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '650px',
      data: {
        title: 'Navigate Dialog',
        message: 'Do you want to navigate?',
        actions: [
          { label: 'Navigate', type: 'primary', actionHandler: this.handleNavigate.bind(this) },
          { label: 'Close', type: 'basic' }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with action:', result);
    });
  }

  openSaveDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '650px',
      data: {
        title: 'Save Dialog',
        message: 'Do you want to save?',
        actions: [
          { label: 'Save', type: 'primary', actionHandler: this.handleSave.bind(this) },
          { label: 'Close', type: 'basic' }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with action:', result);
    });
  }

  handleSave(): void {
    console.log('Save action performed');
    // Add save logic here
  }

  handleNavigate(): void {
    console.log('Navigate action performed');
    this.router.navigate(['/target-route']);
  }
}
