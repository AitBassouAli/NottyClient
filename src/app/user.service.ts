import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from './login/user-modal/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userConnected: UserModule = new UserModule(0, "", "");

  uriUser = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.uriUser}`);
  }
  setUserConnected(user: UserModule) {
    this.userConnected = user;
  }
  getUserConnected() {
    return this.userConnected;
  }
  createUser(user) {
    return this.http.post(`${this.uriUser}`, user);
  }
}
