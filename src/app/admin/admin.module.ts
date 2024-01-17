import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserTypeComponent } from './user-type/user-type.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    StudentComponent,
    TeacherComponent,
    UsersComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ]
})
export class AdminModule { }
