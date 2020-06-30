import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TopbarComponent } from './topbar/topbar.component';

export const plantsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forChild(plantsRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
