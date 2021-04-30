import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken, Course} from './models';
@Injectable({
  providedIn: 'root'
})
export class CurrentCoursesService {
  BASE_URL =  'http://localhost:8000';
  constructor(private http: HttpClient) { 

  }
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`http://127.0.0.1:8000/api/current_courses/4`);
  }
}
