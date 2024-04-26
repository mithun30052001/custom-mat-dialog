import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  dialogRef: any;

  constructor(private dialog: MatDialog) { }

    openMessageDialog(data: any){
      this.dialogRef = this.dialog.open(DialogComponent, {
        disableClose: true,
        data: data
      });

      return this.dialogRef
    }

    closeMessageDialog(){
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    }
}
