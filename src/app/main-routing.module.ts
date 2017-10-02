import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MaterialComponentModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomHomeComponent } from "./room-home/room-home.component";
import { RoomiesComponent } from './roomies/roomies.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExpanceCalculatorComponent } from './expance-calculator/expance-calculator.component';
import { ReportComponent } from './report/report.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { RoomiesService } from "./roomies/roomies.service";

const APP_MAIN_ROUTING : Routes = [
  {path : '', redirectTo : '/login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'room', component : RoomHomeComponent,
  children: [
    {path: '', redirectTo: '/dashboard', pathMatch : 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'roomies', component: RoomiesComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'calc-expance', component: ExpanceCalculatorComponent},
    {path: 'report', component: ReportComponent}
  ]}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_MAIN_ROUTING),MaterialComponentModule,FlexLayoutModule,FormsModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    DashboardComponent,RoomHomeComponent,
    RoomiesComponent,
    CategoriesComponent,
    ExpanceCalculatorComponent,
    ReportComponent, UpdateProfileComponent
  ],
  exports: [RouterModule],
  providers: [RoomiesService],
  entryComponents: [UpdateProfileComponent]
})
export class MainRoutingModule { }
