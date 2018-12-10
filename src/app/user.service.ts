import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  public login(username, password){
    let headers = new HttpHeaders();
    headers.set("Content-Type","application/json")
    return this.http.post(this.uri+ 'login',JSON.stringify({username,password}),{headers:headers,observe:"response"}).pipe(
      map(data => console.log(JSON.stringify(data.headers))
    ));
  }
}
