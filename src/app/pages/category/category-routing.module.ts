import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path:"",
    component:CategoryComponent
  },
  {
    path:"create-category",
    component:CreateCategoryComponent
  },
  {
    path:"edit-category",
    component:EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
