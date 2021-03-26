import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    CourseListComponent,
    CreateUserComponent,
    HomePageComponent,
    LoginPageComponent,
    UserInfoComponent,
    WishlistComponent,
    CurrentCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
