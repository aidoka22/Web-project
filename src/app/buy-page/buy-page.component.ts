import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
