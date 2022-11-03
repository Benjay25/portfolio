import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { PictureComponent } from './resume-page/picture/picture.component';
import { ContentComponent } from './resume-page/content/content.component';



@NgModule({
  declarations: [ResumePageComponent, PictureComponent, ContentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [ResumePageComponent],
})
export class ModulesModule { }
