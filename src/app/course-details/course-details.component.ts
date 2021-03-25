import { Component, OnInit } from '@angular/core';
import {Course} from "../models";
import {ActivatedRoute} from "@angular/router";
import {COURSES} from "../courses-db";
import {Location} from "@angular/common";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.course = COURSES.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.course = COURSES.find((x) => x.id === id);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
