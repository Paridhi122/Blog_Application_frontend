import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
Id: number;
blogs;
  constructor(private activated: ActivatedRoute, private blog: BlogService) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((data) => {
      console.log(data.id);
      this.Id = data.id;
    });
    this.blog.getBlogbyid(this.Id).subscribe( data => {
      this.blogs = data;
    });
  }

}
