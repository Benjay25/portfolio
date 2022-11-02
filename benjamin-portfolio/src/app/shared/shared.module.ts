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

const components = [
  TitleComponent, SecondaryTitleComponent, PageContainerComponent, LayoutComponent, TextComponent, DividerComponent, IconComponent,
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
