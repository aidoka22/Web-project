import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  // addToCourse(course){
  //   COURSES.push(course)
  // }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.BASE_URL}/api/categories/courses/`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/api/categories/courses/${id}`);
  }
}
