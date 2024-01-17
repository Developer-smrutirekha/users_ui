import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any = '';
  password: any = '';

  constructor(private LogInData: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  LogIn() {


    if (this.username == '') {
      alert(
        'Username Can Not Be Empty'
      )
    } else if (this.password == '') {
      alert(
        'Password Can Not Be Empty'
      )
    }

    let data = {
      username: this.username,
      password: this.password,
    }

    this.LogInData.loginDetails(data).subscribe((result: any) => {
      console.log(result)

      if (result.status == 1) {
        console.log('hii');

        if (result.data[0].utype_id == 1) {

          let admininobj = {
            utype_id: result.data[0].utype_id,
            usname: result.data[0].usname,
            password: result.data[0].password,
          }
          localStorage.setItem('adminsession', JSON.stringify(admininobj));

          this.router.navigateByUrl('/admin/dashboard')

        } else if (result.data[0].utype_id == 2) {

          let studentinobj = {
            utype_id: result.data[0].utype_id,
            usname: result.data[0].usname,
            password: result.data[0].password,

          }

          localStorage.setItem('studentsession', JSON.stringify(studentinobj));
          this.router.navigateByUrl('/student/dashboard')
        }
        else {

          let teacherinobj = {
            utype_id: result.data[0].utype_id,
            usname: result.data[0].usname,
            password: result.data[0].password,
          }
          localStorage.setItem('teachersession', JSON.stringify(teacherinobj));
          this.router.navigateByUrl('/teacher/dashboard')

        }
      } else {
        alert('Invalid username or password')

      }
    })

  }

}
