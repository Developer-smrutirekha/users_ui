import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { UserTypeComponent } from './admin/user-type/user-type.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
