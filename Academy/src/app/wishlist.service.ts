import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishs = [];

  addToList(course){
    this.wishs.push((course));
    this.wishs=this.wishs.filter((item, index) => {
      return this.wishs.indexOf(item) === index
  });
  }

  getwishs(){
    return this.wishs;
  }

  clearWishList(){
    this.wishs = [];
    return this.wishs;
  }
  constructor() { }
}