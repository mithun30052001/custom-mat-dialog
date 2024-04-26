import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DummyComponent } from './dummy/dummy.component';
import { NavigationDialogComponent } from './navigation-dialog/navigation-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { MessageDialogService } from './message-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    AlertDialogComponent,
    DummyComponent,
    NavigationDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [MessageDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
