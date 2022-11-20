import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Category } from '../models/category.interface';
import { ApiService } from './api.service';
const asdsa:number = 200;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  $categories = new BehaviorSubject<Category[]>([]);

  get categories():Category[]{
    return this.$categories.value
  }
  constructor(private apiService:ApiService) {
    this.loadCategories()
  }

  loadCategories(){
    this.apiService.getAsset('assets/db/categories.json').subscribe(categories=>{
      this.$categories.next(categories as Category[]);
    })
  }

  getById(id:number):Category | null{
    return this.categories.find(x=>id == x.id) || null;
  }


}
