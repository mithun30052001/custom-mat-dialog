import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICONS } from '../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  message: string = "Are you sure?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";
  okButtonType = "basic";
  cancelButtonType = "basic";
  icon: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private sanitizer: DomSanitizer
  ) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.okButtonType = data.okButtonType || this.okButtonType;
    this.cancelButtonType = data.cancelButtonType || this.cancelButtonType;
    const iconName = data.icon.toString();
    this.icon = ICONS[iconName] || this.icon;
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
