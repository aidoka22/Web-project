import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  logged = false;
  student = false;

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.logged = this.appComponent.logged;
    this.student = this.appComponent.student;
  }
}
