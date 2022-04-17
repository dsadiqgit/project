import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TutorRightComponent } from './portfolio/tutor-right/tutor-right.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'tutor-right', component: TutorRightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
