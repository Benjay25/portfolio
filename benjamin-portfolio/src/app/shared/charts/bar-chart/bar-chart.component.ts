import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, CHART_DEFAULTS } from '../charts.type'; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() barChartData: ChartData;
  barChartOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.barChartOptions = CHART_DEFAULTS;
    this.buildBarChart();
  }

  buildBarChart() {
    this.barChartOptions = {
      ...this.barChartOptions,
      chart: {
        ...CHART_DEFAULTS.chart,
        type: "bar",
      },
      plotOptions: {
        ...CHART_DEFAULTS.plotOptions,
        bar: {
            horizontal: true
        },      
      },
      xAxis: {
        ...CHART_DEFAULTS.xAxis,
          categories: this.barChartData.categories,
      },
      yAxis: {
        ...CHART_DEFAULTS.yAxis,
      },
      series: this.barChartData.series,
      title: {
        ...CHART_DEFAULTS.title,
        text: this.barChartData.title
      }
    };
  }
}
