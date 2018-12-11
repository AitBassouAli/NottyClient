import { Component, OnInit } from '@angular/core';
import { UserModule } from '../login/user-modal/user.modal';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  users: Array<UserModule>;
  user = new UserModule(0, "", "");
  userExist: boolean = false;
  mode:number

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
 
  RegisterUser() {
    this.users.forEach(element => {
      if (this.user.username == element.username) {
        this.userExist = true;
      }
    })
    if (!this.userExist) {
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data)
        this.user= new UserModule(0,"","");
      })
    } else {
      this.mode=1;
    }
  }
  loginPage(){
    this.router.navigate(["auth/login"]);
  }
}
