import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component'
import {MessageDialogData} from './message-data.interface'

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  dialogRef!: MatDialogRef<MatDialogComponent>;;

  constructor(private dialog: MatDialog) { }

    openMessageDialog(data: MessageDialogData){
      this.dialogRef = this.dialog.open(MatDialogComponent, {
        width: '500px',
        height: '250px',
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
