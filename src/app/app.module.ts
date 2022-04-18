import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamiComponent } from './dami/dami.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioStripComponent } from './portfolio-strip/portfolio-strip.component';
import { ContactComponent } from './contact/contact.component';
import { UspsComponent } from './usps/usps.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { TutorRightComponent } from './portfolio/tutor-right/tutor-right.component';
import { FussyKitchenComponent } from './portfolio/fussy-kitchen/fussy-kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    DamiComponent,
    HeroComponent,
    HeaderComponent,
    PortfolioStripComponent,
    ContactComponent,
    UspsComponent,
    PortfolioComponent,
    HomepageComponent,
    TechStackComponent,
    TutorRightComponent,
    FussyKitchenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
