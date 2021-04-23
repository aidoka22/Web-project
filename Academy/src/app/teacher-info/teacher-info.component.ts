import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  name = 'Jon';
  surname = 'Kamron';
  category = 'Teacher';

  constructor() { }

  ngOnInit(): void {
  }

}
