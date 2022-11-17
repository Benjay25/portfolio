import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChartComponent } from './basic-chart/basic-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

const charts = [
  BasicChartComponent,
];

@NgModule({
  declarations: charts,
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: charts
})
export class ChartsModule { }
