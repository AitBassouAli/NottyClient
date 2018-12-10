import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uriUser = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.uriUser}`);
  }
  createUser(user){
    return this.http.post(`${this.uriUser}`,user);
  }
}
