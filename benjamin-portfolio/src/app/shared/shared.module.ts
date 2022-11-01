import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SecondaryTitleComponent } from './secondary-title/secondary-title.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { LayoutComponent } from './layout/layout.component';
import { TextComponent } from './text/text.component';

const components = [
  TitleComponent, SecondaryTitleComponent, PageContainerComponent, LayoutComponent, TextComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: components,
})
export class SharedModule { }
