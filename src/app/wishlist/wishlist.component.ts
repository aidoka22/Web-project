import { Component, OnInit } from '@angular/core';
import {WishListService} from '../wishlist.service';
import {CartService} from '../cart.service';
import { Course } from '../models';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishs:Course[]=[];
  constructor(private wishListService:WishListService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.getWishList();
  }
  getWishList(){
    this.wishListService.getwishs().subscribe((data) => {
      this.wishs = data;
    });
  }
  addToCart(wish){
      this.cartService.addToCart(wish);
      this.deleteFromWishList(wish);
  }
  clearWishList(){
    return this.wishListService.clearWishList().subscribe((data) => {
      this.wishs = data;
    });
  }
  deleteFromWishList(wish){ 
    this.wishs=this.wishs.filter(obj => obj !==wish);
    return this.wishListService.deletefromWishlist(wish).subscribe((data) => {
      wish = data;
    });
   
  }
}
