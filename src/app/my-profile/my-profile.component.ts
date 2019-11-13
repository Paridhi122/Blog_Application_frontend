import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
toggle = false;
  users;
followers;
blogs;
totalFollowing;
id: number;
  constructor(private user: UserService, private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.user.getTotalFollowing().subscribe( data => {
      this.totalFollowing = data;
    });
    this.user.getFollowers().subscribe( data => {
      this.followers = data;
    });
    this.blog.getBlogs().subscribe( data => {
      this.blogs = data;
    });
    return this.user.getAll().subscribe( data => {
      this.users = data;
    });
  }
  goToUser(id: number) {
    console.log(this.id);
    this.router.navigate(['/user-profile'], { queryParams: {id }});
  }
  gotoblog(id: number) {
    console.log(this.id);
    this.router.navigate(['/edit-blog'], { queryParams: {id }});
  }

  unfollow(id: number) {
    this.user.unfollowuser(id).subscribe(data => {
      this.user.getFollowers().subscribe(data1 => {
        this.followers = data1;
        this.toggle = true;
      });
    });
  }
  delelteblog(id: number){
    this.blog.deleteblog(id).subscribe(data => {
      this.blog.getBlogs().subscribe(data1 => {
        this.blogs = data1;
      });
    });
  }
}
