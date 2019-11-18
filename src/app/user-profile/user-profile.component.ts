import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
Id: number;
users;
blogs;
totalfollowing;
followers;
set;
  constructor(private activated: ActivatedRoute, private user: UserService, private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((data) => {
      this.Id = data.id;
    });
    this.user.getstatus(this.Id).subscribe((data) => {
      this.set = data;
    });
    this.user.getUserById(this.Id).subscribe( data => {
      this.users = data;
    });
    this.blog.getblogbyuser(this.Id).subscribe(data => {
      this.blogs = data;
    });
  }
  gotoblog(id: number) {
    this.router.navigate(['/single-blog'], { queryParams: {id }});
  }
  followuser(id: number) {
    console.log(id);
    this.user.follow(id).subscribe(data => {
      this.router.navigate(['/home']);
    });
  }

}
