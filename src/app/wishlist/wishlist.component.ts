import { Component, OnInit } from '@angular/core';
import {WishListService} from "../wishlist.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishListComponent implements OnInit {
  items = this.wishlistService.getItems();

  constructor(private wishlistService: WishListService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.items = this.wishlistService.clearWishlist();
  }

}

