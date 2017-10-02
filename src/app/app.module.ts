import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MaterialComponentModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

 import { FlexLayoutModule } from "@angular/flex-layout";
 import 'hammerjs';

import { AppComponent } from './app.component';
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MaterialComponentModule,FlexLayoutModule,MainRoutingModule,HttpClientModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
