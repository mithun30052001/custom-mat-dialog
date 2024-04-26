import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICONS } from '../icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent {
  message: string = "Are you sure?";
  rightButtonText = "";
  leftButtonText = "";
  leftButtonStyle = "basic";
  rightButtonStyle = "basic";
  leftButtonType = "";
  rightButtonType = "";
  icon: string = "";
  route: string = ""

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MatDialogComponent>,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    if (data) {
      this.message = data.message || this.message;
      if(data.leftButton){
        this.leftButtonText = data.leftButton.text || this.leftButtonText;
        this.leftButtonStyle = data.leftButton.style || this.leftButtonStyle;
        this.leftButtonType = data.leftButton.type || this.leftButtonType;
      }
      if(data.rightButton){
        this.rightButtonText = data.rightButton.text || this.rightButtonText;
        this.rightButtonStyle = data.rightButton.style || this.rightButtonStyle;
        this.rightButtonType = data.rightButton.type || this.rightButtonType;
      }
      const iconName = data.type?.toString();
      this.icon = iconName? (ICONS[iconName] || this.icon) : '';
      this.route = data.navigateTo;
    }
  }

  onAction(): void {
    if(this.rightButtonType === 'confirm'){
      this.dialogRef.close(true);
    }
    else if(this.rightButtonType === 'navigate'){
      this.router.navigate([this.route]);
      this.dialogRef.close();
    }
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
