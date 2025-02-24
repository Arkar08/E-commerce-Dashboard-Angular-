import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

const routes: Routes = [
  {
    path:"",
    component:ProductsComponent
  },
  {
    path:"create-product",
    component:CreateProductsComponent
  },
  {
    path:"edit-product",
    component:EditProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
