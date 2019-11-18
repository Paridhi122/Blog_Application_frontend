import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  title;
  content;
  category;
  Id;
  blogs;
  status;
  data;
  constructor(private blog: BlogService, private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((data) => {
      this.Id = data.id;
    });
    this.blog.getBlogbyid(this.Id).subscribe( data => {
      this.blogs = data;
    });
  }

  checkData(data1: boolean) {
    this.data = !data1;
    if (!data1 === false) {
      this.status = 0;
    } else {
      this.status = 1;
    }
  }
  editblog() {
    const bloog = {
      title: this.title,
      content: this.content,
      category: this.category,
      status: this.status
    };
    console.log(bloog);
    this.blog.editBlog(this.Id, bloog);
  }

  delelteblog(id: number) {
    confirm('Are you sure you want to delete this blog?');
    this.blog.deleteblog(id);
  }
}
