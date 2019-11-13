import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/users/getuser', { headers});
  }
  getFollowers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/list', { headers});
  }

  getTotalFollowing() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/following', { headers});
  }

  getUserById(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/users/getbyid/' + id, { headers});
  }

  unfollowuser(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/unfollow/' + id, { headers});
  }
}
