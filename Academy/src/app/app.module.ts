import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { CourseAddingComponent } from './course-adding/course-adding.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CourseListComponent,
    CourseDetailsComponent,
    HomePageComponent,
    LoginPageComponent,
    CreateUserComponent,
    UserInfoComponent,
    WishlistComponent,
    CurrentCoursesComponent,
    TeacherInfoComponent,
    CourseAddingComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
