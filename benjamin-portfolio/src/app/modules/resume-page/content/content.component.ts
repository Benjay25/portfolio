import { Component, Input, OnInit } from '@angular/core';
import { HomePageStates } from '../home-page-enum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() state: HomePageStates = HomePageStates.Professional;
  age: number = 0;
  education = new Array(2)
  work = new Array(2)

  constructor() { }

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
