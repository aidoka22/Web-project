import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {WishListService} from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  showBuy = false;

  constructor(private cartService: CartService, private wishListService: WishListService) { }

  ngOnInit(): void {
    if(this.items.length != 0) {
      this.showBuy = true;
    }
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.showBuy = false;
  }

  addToWishList(course) {
    this.deleteFromCart(course);
    this.wishListService.addToList(course);
  }

  deleteFromCart(item) {
    this.cartService.deleteFromCart(item);
    this.items = this.items.filter(obj => obj !== item);
    if(this.items.length == 0) {
      this.showBuy = false;
    }
  }
}
