import { Injectable } from '@angular/core';
import {CurrentCourses} from "./currentcourses-db";

@Injectable({
  providedIn: 'root'
})
export class CurrentCoursesService {

  constructor() { }

  getCourses() {
    return CurrentCourses;
  }
  getCourse(id: number) {
    return CurrentCourses.find((x) => x.id === id);
  }

}
