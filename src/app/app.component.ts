import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  openCustomDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '250px',
      data: {
        title: 'Dialog Title',
        message: 'Dialog Message',
        actions: [
          { label: 'Close', type: 'close', color: 'primary' },
          { label: 'Navigate', type: 'navigate', color: 'blue', icon: 'arrow_forward' },
          { label: 'Confirm', type: 'confirmation', color: 'blue', icon: 'refresh' },
          { label: 'Custom Action', type: 'custom', color: 'warn', icon: 'extension' }
        ]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }
}
