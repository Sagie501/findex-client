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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    SignUpComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }