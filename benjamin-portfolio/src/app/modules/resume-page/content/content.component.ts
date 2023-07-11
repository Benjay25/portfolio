import { Component, Input, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartData } from 'src/app/shared/charts/charts.type';
import { HomePageStates } from '../home-page-enum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() state: HomePageStates = HomePageStates.Professional;
  age: number = 0;
  education = new Array(2);
  work = new Array(2);
  aboutMe = `I am an honest, thoughtful person with a desire for growth and self-improvement. I
    excel at co-operation and working within / creating team dynamics. After completing
    my Bsc in Computing from UNISA, I started working as a full stack developer and
    developed my appreciation for full stack software development with a specific passion
    for front end web development and producing big features. In my downtime I enjoy
    gaming, pop culture, philosophy, good spirited debates and exercise.`;

  constructor() {}

  ngOnInit(): void {
    this.getAge();
  }

  getAge() {
    const birthDate = new Date('1998-02-06');
    const today = new Date();

    
    if (today.getMonth() > birthDate.getMonth()) {
      this.age = today.getFullYear() - birthDate.getFullYear();
      return;
    }

    if (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate()) {
      this.age = today.getFullYear() - birthDate.getFullYear();
      return;
    }

    this.age = today.getFullYear() - birthDate.getFullYear() - 1;
  }
}
