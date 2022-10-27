import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ResumePageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [ResumePageComponent],
})
export class ModulesModule { }
