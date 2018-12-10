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
  user = new UserModule(0, 'Hisham', 'Hisham');
  userExist: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

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
    this.userService.getAll().subscribe(element => {
      if (element.username == this.user.username && element.password == this.user.password) {
        this.router.navigate(["notes"]);
        console.log("login bien Bien Effectuer")
      } else {

      }
    }, error => console.log(error));
  }
  RegisterUser() {
    this.user.username = "jamal"
    this.user.password = "jamal"
    this.users.forEach(element => {
      if (this.user.username == element.username) {
        this.userExist = true;
      }
    })
    if (!this.userExist) {
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data)
      })
    } else {
      console.log("user deja exist");
    }
  }
}





