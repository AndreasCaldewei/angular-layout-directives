import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularLayoutDirectivesLibModule} from "../../projects/angular-layout-directives-lib/src/lib/angular-layout-directives-lib.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularLayoutDirectivesLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
