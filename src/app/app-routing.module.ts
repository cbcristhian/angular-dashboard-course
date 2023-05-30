import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes =[
  {path:'',
  component:PagesComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'progress', component:ProgressComponent},
    {path:'graphics1', component:Graphics1Component},
    {path:'', redirectTo:'/dahsboard',pathMatch:'full'},
  ]
  },

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  {path:'**', component:NopagefoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }