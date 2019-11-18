import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username;
  password;
  email;
  name;
  users;
  set;
  constructor(private service: AppService, private router: Router, private user: UserService) { }

  ngOnInit() {
    // this.user.getallusers().subscribe(data => {
    //   this.users = data;
    // });
  }
  checkusername() {
    if (this.username === this.users.username) {
      alert('this username already exists!!');
    }
  }
  adduser() {
   // this.checkusername();
    console.log(this.username);
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      name: this.name
    };
    if (this.username != undefined || this.password != undefined) {
      this.service.addUser(user);
      alert('Welcome!');
    } else {
      alert('Fields cannot be empty');
    }
  }
}
