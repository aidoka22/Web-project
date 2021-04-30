import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from './models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(username: string, email: string, password: string) {
    this.http.post('http://127.0.0.1:8000/api/register/', {
      username,
      email,
      password
    });
  }
}
