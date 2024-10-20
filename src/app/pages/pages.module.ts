import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LandingPageComponent, AboutPageComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class PagesModule { }
