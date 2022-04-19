import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TutorRightComponent } from './portfolio/tutor-right/tutor-right.component';
import { FussyKitchenComponent } from './portfolio/fussy-kitchen/fussy-kitchen.component';
import { ContactComponent } from './contact/contact.component';
import { SkinzComponent } from './portfolio/skinz/skinz.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'tutor-right', component: TutorRightComponent },
  { path: 'fussy', component: FussyKitchenComponent },
  { path: 'skinz', component: SkinzComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
