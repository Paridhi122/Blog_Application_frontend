import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
title;
content;
category;
data = false;
status;
  constructor(private blog: BlogService) { }

  ngOnInit() {
  }
  checkData(data1: boolean) {
    this.data = !data1;
    if (!data1 === false) {
      this.status = 0;
    } else {
      this.status = 1;
    }
  }
  addblog() {
    console.log(this.status);
    const bloog = {
      title: this.title,
      content: this.content,
      category: this.category,
      status: this.status
    };
    this.blog.addBlogs(bloog);
  }
}
