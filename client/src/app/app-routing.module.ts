import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductComponent,
  },
  {path:'products/detail/:id',
  component:ProductDetailComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'**',pathMatch:'full',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
