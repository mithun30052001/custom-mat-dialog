import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-dialog',
  templateUrl: './navigation-dialog.component.html',
  styleUrls: ['./navigation-dialog.component.scss']
})
export class NavigationDialogComponent {
  navigateButtonType = "basic";
  closeButtonType = "basic";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>,
    private router: Router
  ) {
    if(data){
      this.navigateButtonType = data.navigateButtonType || this.navigateButtonType;
      this.closeButtonType = data.closeButtonType || this.closeButtonType;
    }
  }

  onAction(action: string): void {
    if (action === 'navigate') {
      console.log('Navigating...');
      this.router.navigate([this.data.route]);
      this.dialogRef.close();
    } else if (action === 'close') {
      console.log('Closing dialog...');
      this.dialogRef.close();
    }
  }
}
