import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SecondaryTitleComponent } from './secondary-title/secondary-title.component';



@NgModule({
  declarations: [TitleComponent, SecondaryTitleComponent],
  imports: [
    CommonModule,
  ],
  exports: [TitleComponent, SecondaryTitleComponent],
})
export class SharedModule { }
