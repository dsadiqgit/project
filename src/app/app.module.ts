import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamiComponent } from './dami/dami.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioStripComponent } from './portfolio-strip/portfolio-strip.component';

@NgModule({
  declarations: [
    AppComponent,
    DamiComponent,
    HeroComponent,
    PortfolioStripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
