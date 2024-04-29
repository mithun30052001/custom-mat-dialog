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
          label: 'delete',
          style: 'primary'
        },
        leftButton: {
          type: 'close',
          label: 'close',
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
            label: 'dummy',
            navigateTo: 'dummy',
            style:'primary'
          },
          leftButton: {
            type: 'close',
            label: 'close',
            style:'basic'
          }
        })
    }

    openInfoDialog() {
      this.dialogService.openMessageDialog({
        message: 'Information Message',
        type: 'warning',
        leftButton: {
          type: 'close',
          label: 'Close',
          style: 'primary'
        },
      });
    }

}