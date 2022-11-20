import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from '../models/cart.interface';
import { Product } from '../models/product.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $cart = new BehaviorSubject<Product[]>([])
  constructor() { }
  addToCart(product:Product){
    this.$cart.next([...this.$cart.value,product]);
  }
  
  deleteFromCart(product:Product){
    const cart = this.$cart.value.filter(p => p.uuid = product.uuid);
    this.$cart.next(cart);
  }

  setCart(products:Product[]){
    this.$cart.next(products);
  }

  get items():any{
    const cart:Product[] = this.$cart.value;
    const a = cart.reduce((previous,current)=>{
      let exists = cart.find(x=>x.uuid == current.uuid) as  CartProduct || null;
      if(exists){
        exists.quantity++
      }else{
        exists = {...current,quantity:1}
      }
      return exists 
    })
    console.log(a)
    return this.$cart.value;
  }
}
