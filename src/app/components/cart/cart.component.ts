import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems()
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }
  clearCart(){
    this.items = [];
    return this.items;
  }

}
