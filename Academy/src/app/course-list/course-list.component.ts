import { Component, OnInit } from '@angular/core';
import {Course} from "../models";
import {CoursesService} from "../courses.service";



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) {
    // this.courses = [];
  }

  ngOnInit(): void {
    this.getCourses();
    // this.courses = COURSES;
  }

  getCourses() {
    this.courses = this.coursesService.getCourses();
  }

  scroll($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView();
  // }

}
