import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './resume-page/home-page.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { PictureComponent } from './resume-page/picture/picture.component';
import { ContentComponent } from './resume-page/content/content.component';



@NgModule({
  declarations: [HomePageComponent, PictureComponent, ContentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [HomePageComponent],
})
export class ModulesModule { }
