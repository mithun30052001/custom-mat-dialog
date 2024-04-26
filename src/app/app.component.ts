import { Component } from '@angular/core';
import { MessageDialogService } from './message-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialogService: MessageDialogService ) {}

  openDialog(){
    this.dialogService.openMessageDialog({
      type: 'warning',
      message: 'do you really want to delete?',
      rightButton: {
        type: 'confirm',
        text: 'delete',
      },
      leftButton: {
        type: 'close',
        text: 'cancel'
      }
    })
  }

    openNavDialog(){
    this.dialogService.openMessageDialog({
        type: 'warning',
        message: 'do you really want to delete?',
        rightButton: {
          type: 'navigate',
          text: 'dummy',
          NavigateTo: 'dummy'
        },
        leftButton: {
          type: 'close',
          text: 'cancel'
        }
      })
    }
}
