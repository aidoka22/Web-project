import { Component, OnInit } from '@angular/core';
import {WishListService} from '../wishlist.service';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishs = [];
  constructor(private wishListService:WishListService, private cartService:CartService) { }

  ngOnInit(): void {
    this.wishs = this.wishListService.getwishs();
  }

  addToCart(wish){
    this.cartService.addToCart(wish);
  }

  clearWishList(){
    this.wishs = this.wishListService.clearWishList();
  }

  deleteFromCart(wish){
    if (this.wishs.length === 1){
      this.clearWishList();
    }
    else{
      this.wishs = this.wishs.filter(obj => obj !== wish);
    }
  }
}
