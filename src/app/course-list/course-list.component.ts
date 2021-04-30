import { Component, OnInit } from '@angular/core';
import {Course} from '../models';
import {Category} from '../models';
import {CoursesService} from '../courses.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  categories: Category[] = [];
  category: Category;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private categoryService: CategoryService) {
    // this.courses = [];
  }

  ngOnInit(): void {
    // this.getCourses();
    this.getCategories();
    // this.courses = COURSES;
    // this.route.paramMap.subscribe((params) => {
    //   const id = +params.get('id');
    //   this.getCategory(id);
    // });
  }

  getCourses() {
    this.coursesService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  scroll($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getCategory(id: number) {
    this.categoryService.getCategory(id).subscribe((data) => {
      // this.category = data;
      this.courses = data;
    });
  }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView();
  // }

}
