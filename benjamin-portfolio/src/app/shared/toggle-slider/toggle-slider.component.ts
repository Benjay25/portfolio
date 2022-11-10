import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss']
})
export class ToggleSliderComponent implements OnInit {
  isToggledOn = false;
  @Input() toggledOffIcon: string = 'work';
  @Input() toggledOnIcon: string = 'work_off';
  @Input() toggledOnText: string = 'Casual';
  @Input() toggledOffText: string = 'Professional';
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isToggledOn = !this.isToggledOn;
    this.toggled.emit(this.isToggledOn);
  }
}
