import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { MatButtonModule,MatToolbarModule,MatCardModule,MatListModule,MatGridListModule,
 MatMenuModule } from "@angular/material";
 import { FlexLayoutModule } from "@angular/flex-layout";
 import 'hammerjs';

import { AppComponent } from './app.component';
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatToolbarModule,MatCardModule,MatListModule,MatGridListModule,
    MatMenuModule,FlexLayoutModule,MainRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
