import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'weather'
})
export class WeatherPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(value: string | number, temperatureScale?: TemperatureScales): string {
    if (value) {
      if (typeof value === 'string') {
        value = parseFloat(value);
      }
      if (temperatureScale && temperatureScale === TemperatureScales.Fahrenheit) {
        return this.decimalPipe.transform(value, '1.0-0') + '°F';
      } else {
        return this.decimalPipe.transform(value, '1.0-0') + '°C';
      }
    } else {
      return '';
    }
  }
}

export enum TemperatureScales {
  Celsius,
  Fahrenheit
}
