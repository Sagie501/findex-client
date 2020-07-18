import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FindexHomeComponent } from './components/findex-home/findex-home.component';
import { GiveSomethingComponent } from './components/give-something/give-something.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/containers/messages.component';
import { MyItemsComponent } from './components/my-items/containers/my-items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TakeSomethingComponent } from './components/take-something/take-something.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsModule } from '../features/statistics/statistics.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EditItemDialogComponent } from './components/my-items/components/edit-item-dialog/edit-item-dialog.component';
import { NewMessageDialogComponent } from './components/messages/components/new-message-dialog/new-message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    FindexHomeComponent,
    GiveSomethingComponent,
    HeaderComponent,
    NewMessageDialogComponent,
    MessagesComponent,
    EditItemDialogComponent,
    MyItemsComponent,
    SidebarComponent,
    TakeSomethingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedModule,
    StatisticsModule,
  ],
  exports: [AppComponent],
})
export class CoreModule {}
