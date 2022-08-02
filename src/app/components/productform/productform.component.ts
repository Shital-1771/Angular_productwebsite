import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category'; 
import { ProductmanagementServiceService } from 'src/app/services/productmangemnet-service.service'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productCategories: ProductCategory[];
  product:Product=new Product(0,"","","",0,"",0,"","",0)

  constructor(private service:ProductmanagementServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  listOFProductCategory(){
    this.service.getAllProductCategory().subscribe( data=>{
      console.log(data)
      this.productCategories = data
    })
  }
  // onSubmit(){
  //   this.service.saveProduct(this.product).subscribe(()=>{
  //     this.route.navigateByUrl("product")
  //   })

}
