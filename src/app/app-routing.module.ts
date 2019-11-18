import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {AddBlogComponent} from './add-blog/add-blog.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SingleBlogComponent} from './single-blog/single-blog.component';
import {ExploreComponent} from './explore/explore.component';
import {NewcComponent} from './newc/newc.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'add-blog', component: AddBlogComponent},
  {path: 'edit-blog', component: EditBlogComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'single-blog', component: SingleBlogComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'newc', component: NewcComponent},
  { path: ' ', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
