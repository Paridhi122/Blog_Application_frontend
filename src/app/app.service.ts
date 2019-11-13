import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  isLoggedin(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }

  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  addUser(user) {
    return this.httpClient.post('http://localhost:2018/users/addUser' , user).subscribe(res =>
      this.router.navigate(['/home']));
  }
}
