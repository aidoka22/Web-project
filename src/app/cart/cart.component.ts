import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { Course } from '../models';
import {WishListService} from '../wishlist.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items :Course[]=[];

  constructor(private cartService: CartService,
    private wishListService:WishListService,) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartService.getItems().subscribe((data) => {
      this.items = data;
    });
  }
  addToWishList(item){
    this.wishListService.addToList(item);
    this.deleteFromCart(item);
   }
  clearCart() {
    return this.cartService.clearCart().subscribe((data) => {
      this.items = data;
    });
  }
  
  deleteFromCart(item){
    this.items=this.items.filter(obj => obj !==item);
    return this.cartService.deletefromCart(item).subscribe((data) => {
      item = data;
    });
  }
}
