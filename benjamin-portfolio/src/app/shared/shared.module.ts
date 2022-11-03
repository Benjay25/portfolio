import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SecondaryTitleComponent } from './secondary-title/secondary-title.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { LayoutComponent } from './layout/layout.component';
import { TextComponent } from './text/text.component';
import { DividerComponent } from './divider/divider.component';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from './icon/icon.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';

const components = [
  TitleComponent,
  SecondaryTitleComponent,
  PageContainerComponent,
  LayoutComponent,
  TextComponent,
  DividerComponent,
  IconComponent,
  SocialMediaLinksComponent,
  NavBarComponent,
  SkillBlockComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: components,
})
export class SharedModule { }
