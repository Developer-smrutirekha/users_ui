import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { StudentsModule } from './students/students.module';
import { TeacherModule } from './teacher/teacher.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    AppComponent,


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    StudentsModule,
    TeacherModule,
    LoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
