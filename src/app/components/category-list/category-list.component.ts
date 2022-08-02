import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category : Category[]
  constructor(private service : ManagementService) { }
  formModel : Category = new Category(0,"")
  ngOnInit(): void {
    this.listOfCategory()
  }
  onSubmit(): void{
    this.category.push(this.formModel)
  }
  listOfCategory(){
    this.service.getAllCategory().subscribe(data => {
      this.category = data
    })
  }

}
