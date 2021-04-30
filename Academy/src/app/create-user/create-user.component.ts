import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  name = '';
  surname = '';
  username = '';
  password = '';
  category = '';
  teacher = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  register() {
    this.registerService.register(this.username, '', this.password);
    console.log(1);
  }
}
