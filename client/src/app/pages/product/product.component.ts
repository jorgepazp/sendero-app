import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.interface';
import { Product } from 'src/app/models/product.interface';
import { ApiService } from 'src/app/services/api.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  get categories():Category[]{
    return this.categoriesService.categories;
  }

  currentCategory!: Category;
  constructor(
    private productService: ProductService,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.products)
      
    // }, 500);
  }

  get products() {
    return this.currentCategory ?
      this.filterByCategory(this.currentCategory) :
      this.productService.products;
  }

  filterByCategory(category: Category): Product[] {
    return this.productService.products.filter(x => x.categoryId == category.id);
  }

  selectCategory(category:Category){
    this.currentCategory = category;
  }

}
