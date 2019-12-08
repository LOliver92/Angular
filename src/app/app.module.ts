import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './_pages/homepage/homepage.component';
import { FeaturesComponent } from './_pages/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
