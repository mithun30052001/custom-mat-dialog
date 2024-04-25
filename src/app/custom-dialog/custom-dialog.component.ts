import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onButtonClick(action: any): void {
    // Perform action based on action type
    switch (action.type) {
      case 'close':
        this.dialogRef.close();
        break;
      case 'navigate':
        // Implement navigation logic
        break;
      case 'confirmation':
        // Implement confirmation logic
        break;
      case 'custom':
        // Implement custom action logic
        break;
      default:
        break;
    }
  }
}
