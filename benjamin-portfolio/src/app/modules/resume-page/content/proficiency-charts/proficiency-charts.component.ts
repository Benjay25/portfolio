import { Component, OnInit } from '@angular/core';
import { ChartData } from 'src/app/shared/charts/charts.type';

enum ChartTypes {
  BarChart,
  PieChart,
  RadialChart
};

@Component({
  selector: 'app-proficiency-charts',
  templateUrl: './proficiency-charts.component.html',
  styleUrls: ['./proficiency-charts.component.scss']
})
export class ProficiencyChartsComponent implements OnInit {
  frontEndData: ChartData;
  backEndData: ChartData;
  chartType = ChartTypes.BarChart;
  chartTypes = ChartTypes;

  constructor() { }

  ngOnInit(): void {
    this.frontEndData = {
      series: [{
        name: 'Proficiencies',
        data: [10,12,8,15],
      }],
      title: 'Front End',
      categories: ['Angular', 'Typescript', 'HTML', 'CSS'],
    };

    this.backEndData = {
      series: [{
        name: 'Proficiencies',
        data: [12,10,12,5],
      }],
      title: 'Back End',
      categories: ['NodeJS', 'sequelize', 'SQL', 'C#'],
    };
  };

  setChartType(type: ChartTypes) {
    this.chartType = type;
  }
}