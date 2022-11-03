import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isHidden = false;
  icons: string[] = ['home', 'phone', 'note', 'person'];
  currentlySelected = 'home';
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isHidden = !this.isHidden;
  }
}
