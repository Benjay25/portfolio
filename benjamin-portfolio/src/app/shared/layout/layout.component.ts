import { Component, OnInit } from '@angular/core';
import { SocialMediaLinks } from '../social-media-links/social-media-links.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  socials: SocialMediaLinks = {
    Youtube: 'https://www.youtube.com/',
    Twitter: 'https://www.twitter.com/',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
