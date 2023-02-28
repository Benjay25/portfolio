import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './resume-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { PictureComponent } from './resume-page/picture/picture.component';
import { ContentComponent } from './resume-page/content/content.component';
import { ProficiencyChartsComponent } from './resume-page/content/proficiency-charts/proficiency-charts.component';



@NgModule({
  declarations: [HomePageComponent, PictureComponent, ContentComponent, ProficiencyChartsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [HomePageComponent],
})
export class ModulesModule { }
