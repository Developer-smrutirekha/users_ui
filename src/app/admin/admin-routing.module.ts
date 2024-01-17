import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path: 'admin/dashboard', component: DashboardComponent
  },
  {
    path: 'admin/usertype', component: UserTypeComponent,

  },
  {
    path: 'admin/student', component:  StudentComponent ,

  },
  {
    path: 'admin/teacher', component: TeacherComponent,

  },
  {
    path: 'admin/users', component: UsersComponent,

 }

  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
