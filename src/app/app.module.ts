import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselHostComponent } from './carousel-host/carousel-host.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselHostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }