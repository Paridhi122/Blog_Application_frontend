import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {OrderModule} from 'ngx-order-pipe';
import { ExploreComponent } from './explore/explore.component';
import { OrderByPipe } from './order-by.pipe';
import { NewcComponent } from './newc/newc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    MyProfileComponent,
    AddBlogComponent,
    EditBlogComponent,
    UserProfileComponent,
    SingleBlogComponent,
    NavBarComponent,
    ExploreComponent,
    OrderByPipe,
    NewcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
