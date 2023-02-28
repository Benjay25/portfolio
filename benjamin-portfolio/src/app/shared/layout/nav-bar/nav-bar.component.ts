import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isHidden = false;
  isSettingsMenuOpen = false;
  settingsIcons: string[] = ['keyboard_arrow_left','photo', 'person',];
  currentlySelected = 'home';
  currentlySelectedSetting = '';
  constructor(private layoutService: LayoutService) { }

  get icons() {
    return this.layoutService.navBarIcons;
  }

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

    if (icon === "photo_size_select_large" || icon === "photo_library") {
      this.layoutService.togglePicture()
    } 
    
    if (icon !== "settings") {
      this.isSettingsMenuOpen = false;
    }
  }

  selectSettingsIcon(icon: string) {
    if (icon === "keyboard_arrow_left") {
      this.toggleSettings()
    }
  }
}
