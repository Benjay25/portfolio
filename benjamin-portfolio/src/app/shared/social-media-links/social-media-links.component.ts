import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaLinks } from './social-media-links.type';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {
  @Input() links: SocialMediaLinks = {};

  constructor() { }

  ngOnInit(): void {
  }

  link(link: string) {
    window.open(link, '_blank');

  }
}
