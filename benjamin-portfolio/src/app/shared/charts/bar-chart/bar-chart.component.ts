import { Component, Input, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ChartComponent } from 'ng-apexcharts';
import { ChartData, ChartOptions } from '../charts.type'; 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() barChartData: ChartData;
  barChartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.buildBarChart();
  }

  buildBarChart() {
    this.barChartOptions = {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
            horizontal: true
        },      
      },
      xAxis: {
          categories: this.barChartData.categories,
          labels: {
            style: {
              colors: ['#FFF'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
          }
      },
      yAxis: {
          labels: {
            style: {
              colors: ['#FFF'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
          }
      },
      series: this.barChartData.series,
    };
  }
}
