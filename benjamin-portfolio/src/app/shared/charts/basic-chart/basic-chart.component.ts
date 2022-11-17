import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions, CHART_DEFAULTS } from '../charts.type';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = CHART_DEFAULTS;
  }
}
