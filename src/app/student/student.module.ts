import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent

  ],

  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
  