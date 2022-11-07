import { Component, OnInit } from '@angular/core';
import { HomePageStates } from './home-page-enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  state: HomePageStates = HomePageStates.Professional;
  states = HomePageStates;
  constructor() { }

  ngOnInit(): void {
  }

}
