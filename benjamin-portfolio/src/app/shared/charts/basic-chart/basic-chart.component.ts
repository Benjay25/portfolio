import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions, CHART_DEFAULTS } from '../charts.type';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;  
  @Input() partialChartOptions: Partial<ChartComponent>;

  public chartOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = CHART_DEFAULTS;
    this.populateOptions();
  }
  
  populateOptions() {
    for (let key of Object.keys(this.chartOptions)) {
      const partialObjectForKey = this.partialChartOptions[key as keyof ChartComponent];
      if (partialObjectForKey) {
        this.chartOptions.chart = this.partialChartOptions.chart ?? this.chartOptions.chart;
        this.chartOptions.plotOptions = this.partialChartOptions.plotOptions ?? this.chartOptions.plotOptions;
        this.chartOptions.series = this.partialChartOptions.series as ApexAxisChartSeries ?? this.chartOptions.series as ApexAxisChartSeries;
        this.chartOptions.chart = this.partialChartOptions.chart ?? this.chartOptions.chart;
        this.chartOptions.chart = this.partialChartOptions.chart ?? this.chartOptions.chart;
        this.chartOptions.chart = this.partialChartOptions.chart ?? this.chartOptions.chart;
      }
    }
  }
}
