import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaLinks } from 'src/app/shared/social-media-links/social-media-links.type';
import { HomePageStates } from '../home-page-enum';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() state: HomePageStates = HomePageStates.Professional;
  socials: SocialMediaLinks = {};

  professionalSocials: SocialMediaLinks = {
    LinkedIn: 'https://www.linkedin.com/in/benjamin-waters-b75853186/',
    Github: 'https://www.github.com/',
    Instagram: 'https://www.instagram.com/',
  };
  
  casualSocials: SocialMediaLinks = {
    Youtube: 'https://www.youtube.com/',
    Twitter: 'https://www.twitter.com/',
    LinkedIn: 'https://www.linkedin.com/in/benjamin-waters-b75853186/',
    Facebook: 'https://www.facebook.com/',
    Instagram: 'https://www.instagram.com/',
  };

  constructor() { }

  ngOnInit(): void {
    this.socials = this.state === HomePageStates.Professional ? this.professionalSocials : this.casualSocials;
  }
}
