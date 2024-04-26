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
        message: 'do you really want to delete?',
        type: 'warning',
        rightButton: {
          type: 'confirm',
          text: 'delete',
          style: 'primary'
        },
        leftButton: {
          type: 'close',
          text: 'cancel',
          style: 'basic'
        }
      })
    }

    openNavDialog(){
      this.dialogService.openMessageDialog({
        message: 'do you really want to delete?',
        type: 'warning',
          rightButton: {
            type: 'navigate',
            text: 'dummy',
            navigateTo: 'dummy',
            style:'primary'
          },
          leftButton: {
            type: 'close',
            text: 'cancel',
            style:'basic'
          }
        })
    }

    openAlertDialog() {
      this.dialogService.openMessageDialog({
        data: {
          message: 'HelloWorld',
          type: 'warning',
          leftButton:{
            type:'close',
            text:'Close',
            style:'primary'
          },
        },
      });
  }
}