import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product.module';

const routes: Routes = [
  {
    path: '',
    component: ProductModule
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
    
})
export class ProductRoutingModule { }
