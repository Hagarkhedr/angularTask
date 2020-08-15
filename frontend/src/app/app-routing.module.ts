import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginFormComponent} from './login-form/login-form.component';
const routes: Routes = [
  
   { path:'', component: HomeComponent },
   { path:'loginForm', component: LoginFormComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
