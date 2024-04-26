import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {
  message: string = "";
  cancelButtonText = "Cancel";
  buttonType = "basic";
  icon = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>
  ) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
      this.buttonType = data.buttonType || this.buttonType;
      this.icon = data.icon || this.icon;
    }

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
