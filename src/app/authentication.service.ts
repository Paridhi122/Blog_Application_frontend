import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa( username + ':' + password)});
    return this.http.get('http://localhost:2018/users/getall', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
          return userData;
        }
      ));
  }
  getAll() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/users/getuser', { headers});
  }
}
