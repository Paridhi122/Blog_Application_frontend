import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
toggle = false;
  users;
followers;
following1;
blogs;
totalFollowing;
totalfollowers;
id: number;
set;
set1;
set2;
  constructor(private user: UserService, private blog: BlogService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user.getFollwers().subscribe(data => {
      this.followers = data;
    });
    // this.user.getTotalFollowers().subscribe(data => {
    //   this.totalfollowers = data;
    // });
    // this.user.getTotalFollowing().subscribe( data => {
    //   this.totalFollowing = data;
    // });
    this.user.getFollowing().subscribe( data => {
      this.following1 = data;
    });
    this.blog.getBlogs().subscribe( data => {
      this.blogs = data;
    });
    return this.auth.getAll().subscribe( data => {
      this.users = data;
    });
  }
  goToUser(id: number) {
    console.log(this.id);
    this.router.navigate(['/user-profile'], { queryParams: {id }});
  }

  gotoblog(id: number) {
    console.log(this.id);
    this.router.navigate(['/single-blog'], { queryParams: {id }});
  }
  editBlog(id: number) {
    console.log(this.id);
    this.router.navigate(['/edit-blog'], { queryParams: {id }});
  }

  unfollow(id: number) {
    this.user.unfollowuser(id).subscribe(data => {
      this.user.getFollowing().subscribe(data1 => {
        this.following1 = data1;
        this.toggle = true;
      });
    });
  }
  // checkBlogs() {
  //   if (this.blogs != null) {
  //     this.set =  true;
  //   } else {
  //     this.set = false;
  //   }
  // }
  // checkfollowing() {
  //   if (this.following1 == null) {
  //     this.set1 = false;
  //   } else {
  //     this.set1 = true;
  //   }
  // }
  // checkfollowers() {
  //   if (this.followers == null) {
  //     this.set2 = false;
  //   } else {
  //     this.set2 = true;
  //   }
  // }
}

