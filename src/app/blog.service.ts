import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private router: Router) { }
  getBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/getBlogs', { headers});
  }
  getall() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/getall', { headers});
  }

  addBlogs(blog) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.post('http://localhost:2018/blogs/addBlog', blog, { headers}).subscribe(data => {
      this.router.navigate(['/my-profile']);
    });
  }
  editBlog(id , blog) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.put('http://localhost:2018/blogs/updateBlog/' + id, blog, { headers}).subscribe(data => {
      this.router.navigate(['/my-profile']);
    });
  }
  deleteblog(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/deleteBlog/' + id, { headers}).subscribe(data => {
      this.router.navigate(['/my-profile']);
    });
  }

  search(s) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/search/' + s, { headers});
  }

  getBlogbyid(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/getbyid/' + id, { headers});
  }

  getblogbyuser(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/blogs/getbyuser/' + id, { headers});
  }

  getAllBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:2018/follow/getbloglist', { headers});
  }
}
