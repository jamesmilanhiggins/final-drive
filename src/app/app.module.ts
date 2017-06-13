import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SecondPlayComponent } from './second-play/second-play.component';
import { FirstPlayComponent } from './first-play/first-play.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondPlayComponent,
    FirstPlayComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
