import { Component, OnInit } from '@angular/core';
import {Course} from "../models";
import {COURSES} from "../courses-db";



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor() {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courses = COURSES;
  }

}
