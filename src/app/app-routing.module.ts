import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent} from './login-page/login-page.component';
import { CreateUserComponent} from './create-user/create-user.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CurrentCoursesComponent } from './current-courses/current-courses.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create', component: CreateUserComponent},
  {path:'user-info',component: UserInfoComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'current-courses',component:CurrentCoursesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
