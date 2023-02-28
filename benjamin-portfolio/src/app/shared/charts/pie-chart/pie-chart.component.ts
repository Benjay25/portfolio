import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, CHART_DEFAULTS } from '../charts.type';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() chartData: ChartData;
  chartOptions: ChartOptions;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = CHART_DEFAULTS;
    this.buildPieChart();
  }

  buildPieChart() {
    this.chartOptions = {
      ...this.chartOptions,
      chart: {
        ...CHART_DEFAULTS.chart,
        type: "pie",
      },
      plotOptions: {
        ...CHART_DEFAULTS.plotOptions,
      },
      labels: this.chartData.categories,
      series: this.chartData.series[0].data as number[],
      title: {
        ...CHART_DEFAULTS.title,
        text: this.chartData.title
      }
    };
  }
}
