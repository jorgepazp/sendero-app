import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartProduct } from 'src/app/models/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cart:CartService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
  }

  remove(item:CartProduct){
    this.cart.deleteFromCart(item)
  }

  add(item:CartProduct){
    this.cart.addToCart(item);
  }
  
}
