import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isPictureVisible = true;
  navBarIcons: string[] = ['home', 'phone', 'settings', 'photo_size_select_large'];

  constructor() { }
  
  togglePicture() {
    this.isPictureVisible = !this.isPictureVisible;
    const photoIconIndex = this.navBarIcons.length - 1;
    this.navBarIcons[photoIconIndex] = this.navBarIcons[photoIconIndex] === 'photo_library' ? 'photo_size_select_large' : 'photo_library';
  }
}
