import { Injectable } from '@angular/core';
import {COURSES} from "./courses-db";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return COURSES;
  }
  getCourse(id: number) {
    return COURSES.find((x) => x.id === id);
  }

}
