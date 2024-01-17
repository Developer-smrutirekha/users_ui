import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent {
  username: string = '';
  password: string = '';
  // utypes: any;
  data:any;
  items:any;
  defaultselect: any = '0';

  mainheader: any = true;
  header: any = false;
  viewtable: any = true;
  viewdata: any='';

  addform: any = false;
  updateformm = false;
  updateheader = false;
  utype: any;
  name: any;
  intid: any;
// defaultselect: string = '0'; 

 
  constructor(private addData: AdminService, private router: Router){}

  ngOnInit(): void {
    this.viewData();
this.getDta();

  }

viewData() {

  this.addData.getTypes().subscribe((result: any) => {
    console.log(result)
this.items= result.data;
})
}

getDta(){
  this.addData.selTypes().subscribe((result: any) => {

    console.log(result)
this.viewdata=result.data;
  })
}


  sub() {
    if (this.username == '') {
     
      alert(
        'Username Can Not Be Empty'
      )
    }else{
      let data = {
        username: this.username,
        password :this.password,
        userType: this.defaultselect
      };

      this.addData.insusers(data).subscribe((result: any) => {
        console.log(result);
       
        if (result.status === 1) {
          this.router.navigateByUrl('/user/dashboard');

          let userinobj = {
            username: result.data[0].username,
            password: result.data[0].password,
            userType: result.data[0].userType,
          };
          localStorage.setItem('adminsession', JSON.stringify(userinobj));
          this.router.navigateByUrl('/dashboard')
        }else{
          alert('Invalid username or password')
        }
      })
    }
  }

showForm(){
    this.viewtable = false;
    this.addform = true;
    this.mainheader = true;
    this.header = false;
}

showTab(){ 

  this.viewtable = true;
  this.addform = false;
  this.mainheader = true;
  this.header = false;
}

getuserData(data:any){

  this.viewtable = false;
  this.addform = false;
  // this.addformm = false;
  this.updateformm = true;
  this.mainheader = false;
  this.updateheader = true;
  let dat = {
    id: data,
  };
  
  this.addData.updateuser(dat).subscribe((result: any) => {
    console.log(result);
    this.intid = result[0].id;
    this.name = result[0].usname;
    this.password = result[0].password;
    this.utype = result[0].utype_id;
    
    console.log(result, 'Dat');
  });

}

updateshowTab() {
  this.viewtable = true;
  this.updateformm = false;
  this.updateheader = false;
  this.mainheader = true;

}

Updatetab(){
  let y = {
    id: this.intid,
    name: this.name,
    password: this.password,
    utype: this.utype,
  
  };
  this.addData.Updatetab(y).subscribe((result: any) => {
    
    console.log(result);
    if(result.status == 1){
      alert(result.message);
      this.getDta();
    }else {
      alert(result.message);
    
    }
    this.viewtable = true;
    // this.addformm = false;
    this.updateformm = false;
    this.mainheader = true;
    this.updateheader = false;
    this.getDta();
  });

}


userDataDelete(data:any){
let dta = {
  id : data
}
  this.addData.delTypes(dta).subscribe((result: any) => {
    console.log(result);
if(result.status == 1){
  alert(result.message);
  this.getDta();
}else {
  alert(result.message);

}

  })
}


// userDataDelete(data: any) {


//   if (data && data.id) {
//     this.addData.delTypes(data.id).subscribe(
//       (result: any) => {
//         console.log(result);       
//       },
//     );
//   } else {
//     console.error('Invalid data for deletion:', data);
//   }
// }


}
