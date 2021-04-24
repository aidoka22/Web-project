import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(course){
    this.items.push((course));
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  deleteFromCart(item) {
    if (this.items.length === 1){
      this.clearCart();
    }
    else{
      this.items = this.items.filter(obj => obj !== item);
    }
  }

  constructor() { }
}
