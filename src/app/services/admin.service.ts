import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  url= environment.url;
  
  constructor(private http:HttpClient) { }

  // Addusers(data:any){
  //   return this.http.post(this.url+'adduser', data);
  // }
  
  getTypes(){
    return this.http.get(this.url+'type');
  }

  insusers(data:any){
    return this.http.post(this.url+'insert',data);
  }

  selTypes(){
    return this.http.get(this.url+'select');
  }

  delTypes(data:any){
    return this.http.post(this.url+'delete',data);
  }

  Updatetab(y:any){
    return this.http.post(this.url+'upview',y);
  }

  updateuser(dat:any){
    return this.http.post(this.url+'updateusers',dat);
  }
}
