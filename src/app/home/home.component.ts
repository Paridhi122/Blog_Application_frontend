import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
blogs;
  constructor(private blog: BlogService) { }

  ngOnInit() {
    this.blog.getAllBlogs().subscribe(data => {
      this.blogs = data;
    });
  }

}
