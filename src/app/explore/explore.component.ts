import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
blogs;
id;
  constructor(private blog: BlogService, private router: Router) { }

  ngOnInit() {
    this.blog.getall().subscribe(data => {
      this.blogs = data;
    });
  }
  goToUser(id: number) {
    console.log(this.id);
    this.router.navigate(['/user-profile'], { queryParams: {id }});
  }
  gotoblog(id: number) {
    this.router.navigate(['/single-blog'], { queryParams: {id }});
  }
  search(s: string) {
    this.blog.search(s).subscribe((data) => {
      this.blogs = data;
    });
  }

}
