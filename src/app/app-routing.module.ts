import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BouncingBallComponent } from './pages/projects/bouncing-ball/bouncing-ball.component';


const routes: Routes = [
  { path: 'projects', component: BouncingBallComponent},
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
