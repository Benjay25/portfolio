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
import { MatRippleModule } from '@angular/material/core';
import { ToggleSliderComponent } from './toggle-slider/toggle-slider.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from './charts/charts.module';
import { ProjectComponent } from './project/project.component';

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
  ExperienceBlockComponent,
  ToggleSliderComponent,
  ProjectComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    FormsModule,
  ],
  exports: [...components, ChartsModule],
})
export class SharedModule { }
