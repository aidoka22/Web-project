import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit{

  username = '';
  password = '';
  student = '';

  constructor(private loginService: LoginService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.appComponent.logged = true;
    }
  }

  login() {
    // console.log(this.username)
    this.loginService.login(this.username, this.password).subscribe( (data) => {
      localStorage.setItem('token', data.token);
      this.appComponent.logged = true;
      this.username = '';
      this.password = '';
    });
    // this.appComponent.logged = true;
    // this.username = '';
    // this.password = '';
  }
}
