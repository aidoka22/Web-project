import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishs = [];

  addToList(course){
    this.wishs.push((course));
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