import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamiComponent } from './dami/dami.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioStripComponent } from './portfolio-strip/portfolio-strip.component';
import { ContactComponent } from './contact/contact.component';
import { UspsComponent } from './usps/usps.component';

@NgModule({
  declarations: [
    AppComponent,
    DamiComponent,
    HeroComponent,
    HeaderComponent,
    PortfolioStripComponent,
    ContactComponent,
    UspsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
