import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-adding',
  templateUrl: './course-adding.component.html',
  styleUrls: ['./course-adding.component.css']
})
export class CourseAddingComponent implements OnInit {

  name = '';
  title = '';
  description = '';
  cost = '';

  constructor() { }

  ngOnInit(): void {
  }

}
