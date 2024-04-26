import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICONS } from '../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html'
})
export class AlertDialogComponent {
  message: string = "";
  cancelButtonText = "Cancel";
  buttonType = "basic";
  icon: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertDialogComponent>,
    private sanitizer: DomSanitizer
  ) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
      this.buttonType = data.buttonType || this.buttonType;
      const iconName = data.icon.toString();
      this.icon = ICONS.warning || this.icon;
    }

  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  protected get icons(): SafeHtml {
    const svgContent = this.icon;
    if (svgContent) {
      return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    } else {
      return '';
    }
  }
}
