import { Component, OnInit } from '@angular/core';
import {Course} from '../models';
import {ActivatedRoute} from '@angular/router';
import {COURSES} from "../courses-db";
import {Location} from '@angular/common';
import {CoursesService} from '../courses.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private coursesService: CoursesService,
              private cartService: CartService) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.course = COURSES.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getCourse(id);
      // this.course = COURSES.find((x) => x.id === id);
    });
  }

  getCourse(id: number) {
    this.course = this.coursesService.getCourse(id);
  }

  addToCart(course) {
    this.cartService.addToCart(course);
    window.alert('The course has been added to the cart!');
  }

  goBack(): void {
    this.location.back();
  }

}
