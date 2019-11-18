import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getFollowing() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/list', { headers});
  }
  //
  // getTotalFollowing() {
  //   const token = sessionStorage.getItem('token');
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
  //   return this.http.get('http://localhost:2018/follow/following', { headers});
  // }

  getFollwers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/followers', { headers});
  }

  // getTotalFollowers() {
  //   const token = sessionStorage.getItem('token');
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
  //   return this.http.get('http://localhost:2018/follow/totalfollowers', { headers});
  // }

  getUserById(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/users/getbyid/' + id, { headers});
  }

  unfollowuser(id: number) {
    console.log(id);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/unfollow/' + id, { headers});
  }

  follow(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/f/' + id, { headers});
  }
  getallusers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/users/getall', { headers});
  }
  getstatus(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/status/' + id, { headers});
  }
}
