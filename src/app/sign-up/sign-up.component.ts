import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

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
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
  }
  adduser() {
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
