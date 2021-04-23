import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Course} from './models';
import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL =  'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>('http://127.0.0.1:8000/api/login/', {
      username,
      password
    });
  }
  //
  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>( 'http://127.0.0.1:8000/api/companies/');
  // }
}
