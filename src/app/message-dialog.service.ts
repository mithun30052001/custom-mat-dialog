import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component'

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {
  dialogRef: any;

  constructor(private dialog: MatDialog) { }

    openMessageDialog(data: any){
      this.dialogRef = this.dialog.open(MatDialogComponent, {
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
