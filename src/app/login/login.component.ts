import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModule } from './user-modal/user.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: Array<UserModule>;
  user = new UserModule(0, 'ahmed', 'khachani');

  constructor(private userService: UserService , private router : Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll()
      .subscribe(data => {
        this.users = data,
          console.log(data)
      }, error => console.log(error));
  }
  login() {
    this.users.forEach(element => {
      if (element.username == this.user.username && element.password == this.user.password) {
        this.router.navigate(["notes"]);
      } else {

      }
    });
  }
}
