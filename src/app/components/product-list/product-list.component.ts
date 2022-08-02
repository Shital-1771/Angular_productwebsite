import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ManagementService } from 'src/app/services/management.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[]
  constructor(private service : ManagementService,
    private route : Router,
    private cartservice : CartService) { }
  ngOnInit(): void {
    this.listOfProducts()
  }
  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  listOfProducts(){
    this.service.getAllProduct().subscribe(data => {
      this.products = data
    })
  }
  addProduct(){
    this.route.navigateByUrl("/merchant")
  }
  gotoHome(){
    this.route.navigateByUrl("/")
  }

}
