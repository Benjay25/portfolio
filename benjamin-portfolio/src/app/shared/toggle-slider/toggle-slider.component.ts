import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss']
})
export class ToggleSliderComponent implements OnInit {
  @Input() toggleProperty: boolean = true;
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
