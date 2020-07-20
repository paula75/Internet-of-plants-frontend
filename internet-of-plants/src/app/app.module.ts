import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TopbarComponent } from './topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';

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
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MatCardModule,
    RouterModule.forChild(plantsRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
