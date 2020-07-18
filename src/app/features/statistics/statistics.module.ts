import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './containers/statistics/statistics.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    StatisticsComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
