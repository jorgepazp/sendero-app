import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productUuid:string|null = null;
  product!:Product|null;
  constructor(
    private location: Location,
    private productService:ProductService,
    private cartService:CartService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe(params=>{
      this.productService.$products.pipe(take(2)).subscribe(p=>{
        this.productUuid = params.get('id');
        this.product = this.productService.findByUuid(this.productUuid);
      })

    })

  }

  goBack = ():void =>{this.location.back()}

}
