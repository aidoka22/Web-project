import { Component, OnInit } from '@angular/core';
import {Course} from "../models";
import {CurrentCoursesService} from "../current-courses.service";

@Component({
  selector: 'app-current-courses',
  templateUrl: './current-courses.component.html',
  styleUrls: ['./current-courses.component.css']
})
export class CurrentCoursesComponent implements OnInit {
  courses: Course[]=[];

  constructor(private currentcoursesService: CurrentCoursesService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.currentcoursesService.getCourses().subscribe((data) => {
    this.courses = data;
  });
  }
}
