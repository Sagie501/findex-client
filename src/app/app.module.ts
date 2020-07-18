import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/components/button/button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/containers/home.component';
import { SidebarComponent } from './components/home/components/sidebar/sidebar.component';
import { HeaderComponent } from './components/home/components/header/header.component';
import { MyItemsComponent } from './components/home/components/my-items/containers/my-items.component';
import { EditItemDialogComponent } from './components/home/components/my-items/components/edit-item-dialog/edit-item-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StatisticsComponent } from './components/home/components/statistics/statistics.component';
import { WeatherPipe } from './pipes/weather/weather.pipe';
import { DecimalPipe } from '@angular/common';
import { GiveSomethingComponent } from './components/home/components/give-something/give-something.component';
import { MessagesComponent } from './components/home/components/messages/containers/messages.component';
import { NewMessageDialogComponent } from './components/home/components/messages/components/new-message-dialog/new-message-dialog.component';
import { TakeSomethingComponent } from './components/home/components/take-something/take-something.component';
import { FindexHomeComponent } from './components/home/components/findex-home/findex-home.component';
import { ContactUsComponent } from './components/home/components/contact-us/contact-us.component';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    SignUpComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    MyItemsComponent,
    EditItemDialogComponent,
    StatisticsComponent,
    WeatherPipe,
    GiveSomethingComponent,
    MessagesComponent,
    NewMessageDialogComponent,
    TakeSomethingComponent,
    FindexHomeComponent,
    ContactUsComponent,
    PieChartComponent
  ],
  imports: [
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
    MatSnackBarModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
