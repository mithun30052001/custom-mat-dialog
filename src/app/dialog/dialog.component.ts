import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  buttonObj: any;
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private router: Router
  ) {
    this.buttonObj = data;
  }

  action(buttonObj: any){
    if(buttonObj.type === 'confirm'){
      this.dialogRef.close(true)
      console.log("clicked");
    }
    if(buttonObj.type === 'close'){
      this.dialogRef.close()
      console.log("closed");
    }
    if(buttonObj.type === 'navigate'){
      this.dialogRef.close(true)
      if (buttonObj.NavigateTo) {
        console.log("Navigated to ", buttonObj.NavigateTo);
        this.router.navigate([buttonObj.NavigateTo]);
      }
    }
  }
}
