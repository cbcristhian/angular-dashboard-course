import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes:Routes=[
  {path:'dashboard',
  component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent},
    {path:'progress', component:ProgressComponent},
    {path:'graphics1', component:Graphics1Component},
    {path:'account-settings', component:AccountSettingsComponent},

  ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
