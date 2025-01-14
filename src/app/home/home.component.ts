import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
blogs;
set = false;
  searchbar: string;
  constructor(private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.blog.getAllBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
  gotoblog(id: number) {
    this.router.navigate(['/single-blog'], { queryParams: {id }});
  }
  search(s: string) {
    this.blog.search(s).subscribe( (data) => {
      this.blogs = data;
      this.check();
    });
  }
  check() {
    this.set = true;
  }
}
