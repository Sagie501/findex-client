import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { WeatherPipe } from './pipes/weather/weather.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ButtonComponent,
    WeatherPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ButtonComponent,
    WeatherPipe
  ]
})
export class SharedModule { }
