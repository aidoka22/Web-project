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

  deleteFromWishlist(wish) {
    if (this.wishs.length === 1){
      this.clearWishList();
    }
    else{
      this.wishs = this.wishs.filter(obj => obj !== wish);
    }
  }

  clearWishList(){
    this.wishs = [];
    return this.wishs;
  }

  constructor() { }
}
