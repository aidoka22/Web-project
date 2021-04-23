import { Component, OnInit } from '@angular/core';
import {WishListService} from '../wishlist.service';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishs=this.wishListService.getwishs();
  constructor(private wishListService:WishListService,
    private cartService:CartService) { }

  ngOnInit(): void {
  }
  addToCart(wish){
      this.cartService.addToCart(wish);
  }
  clearWishList(){
    this.wishs=this.wishListService.clearWishList();
  }
}
