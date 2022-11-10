import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isPictureVisible = true;

  constructor() { }
  
  togglePicture() {
    this.isPictureVisible = !this.isPictureVisible;
  }
}
