import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { Category } from 'src/app/common/category';
import { ManagementService } from 'src/app/services/management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product = new Product(0,"","","",0,"",0,"","",0)
  productcategories : Category[]
  constructor(
    private service : ManagementService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.listOfCategory();
  }
  listOfCategory(){
    this.service.getAllCategory().subscribe(data => {
      this.productcategories = data
    })
  }

  onSubmit(): void{
    this.service.saveProduct(this.product).subscribe(() =>{
      this.route.navigateByUrl("/shop")
    })
  }
  gotoHome(){
    this.route.navigateByUrl("/")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }

}
