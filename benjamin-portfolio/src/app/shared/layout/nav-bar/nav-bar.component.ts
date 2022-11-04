import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isHidden = false;
  isSettingsMenuOpen = false;
  icons: string[] = ['home', 'phone', 'settings', 'person'];
  settingsIcons: string[] = ['keyboard_arrow_left','keyboard_arrow_left','keyboard_arrow_left','keyboard_arrow_left',];
  currentlySelected = 'home';
  currentlySelectedSetting = '';
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isHidden = !this.isHidden;
    this.isSettingsMenuOpen = false
  }

  toggleSettings() {
    this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
  }

  select(icon: string) {
    this.currentlySelected = icon;

    if (icon === "settings") {
      this.toggleSettings()
    }
  }

  selectSettingsIcon(icon: string) {
    if (icon === "keyboard_arrow_left") {
      this.toggleSettings()
    }
  }
}
