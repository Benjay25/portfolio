import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-title',
  templateUrl: './secondary-title.component.html',
  styleUrls: ['./secondary-title.component.scss']
})
export class SecondaryTitleComponent implements OnInit {
  @Input() isWhiteText = false;
  constructor() { }

  ngOnInit(): void {
  }

}
