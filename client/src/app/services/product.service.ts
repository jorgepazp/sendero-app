import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Category } from '../models/category.interface';
import { Product } from '../models/product.interface';
import { ApiService } from './api.service';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private api: ApiService,
    private categoriesService: CategoriesService
  ) {
    this.loadProducts().subscribe(res=>{
      console.log(res)
      this.$products.next(res);
    });
   }

  $products = new BehaviorSubject<Product[]>([]);
  get products(): Product[] {
    console.log(this.$products.value)
    return this.$products.value;
  };

  loadProducts() {
    return this.api.getAsset<Product[]>('assets/db/products.json').pipe(tap(x => this.pairCategory(x)));
  }

  pairCategory(products: Product[]): Product[] {
    const doPair = (id: number) => this.categoriesService.getById(id);
    return products.map(p => {
      p.category = doPair(p.categoryId)
      return p;
    });
  }

  findByUuid(uuid:string|null = null):Product | null{
    console.log(this.products)
    return this.products.find(x=>x.uuid == uuid) || null; 
  }

}
