import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  showBuy = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if(this.items.length != 0) {
      this.showBuy = true;
    }
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.showBuy = false;
  }

}
