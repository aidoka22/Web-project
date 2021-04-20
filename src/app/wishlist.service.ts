import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  items = [];

  addToList(course){
    this.items.push((course));
  }

  getItems(){
    return this.items;
  }

  clearWishlist(){
    this.items = [];
    return this.items;
  }
  constructor() { }
}