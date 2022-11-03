import { Component, OnInit } from '@angular/core';
import { SocialMediaLinks } from 'src/app/shared/social-media-links/social-media-links.type';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  socials: SocialMediaLinks = {
    Youtube: 'https://www.youtube.com/',
    Twitter: 'https://www.twitter.com/',
    LinkedIn: 'https://www.linkedin.com/in/benjamin-waters-b75853186/',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
