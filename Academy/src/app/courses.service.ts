import { Injectable } from '@angular/core';
import {COURSES} from "./courses-db";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  addToCourse(course){
    COURSES.push(course)
  }

  getCourses() {
    return COURSES;
  }

  getCourse(id: number) {
    return COURSES.find((x) => x.id === id);
  }
}
