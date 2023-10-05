import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { PptSlidesComponent } from './ppt-slides/ppt-slides.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent },
  { path: 'slides', component: PptSlidesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
