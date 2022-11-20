import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient) { }

  getHello(){
    return this.http.get('http://localhost:3000');
  }
  postMail(obj:any){
    return this.http.post('http://localhost:3000/contact',obj);
  }

  getAsset<T>(route:string):Observable<T>{
    return this.http.get<T>(route);
  }



}
