import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent} from './login-page/login-page.component';
import { CreateUserComponent} from './create-user/create-user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';

import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { CourseAddingComponent } from './course-adding/course-adding.component';
import {BuyPageComponent} from './buy-page/buy-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'user-info', component: UserInfoComponent},
  {path: 'teacher-info', component: TeacherInfoComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path:'course-adding',component: CourseAddingComponent},
  {path: 'current-courses', component: CurrentCoursesComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'buy', component: BuyPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
