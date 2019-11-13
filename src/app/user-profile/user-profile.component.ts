import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
Id: number;
user1;
blogs;
totalfollowing;
followers;
  constructor(private activated: ActivatedRoute, private user: UserService, private blog: BlogService) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((data) => {
      this.Id = data.id;
    });
    this.user.getUserById(this.Id).subscribe( data => {
      this.user1 = data;
    });
    this.blog.getblogbyuser(this.Id).subscribe(data => {
      this.blogs = data;
    });
  }

}
