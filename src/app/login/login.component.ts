import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private appService: AppService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['home']);
    }
  }
  login() {
    console.log(this.username , this.password);
    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        this.appService.isLoggedin(true);
        this.router.navigate(['home']);
      }
    );
  }

}
