import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: "", redirectTo: "dashboard", pathMatch:"prefix",
      },
      
       {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: "product",
    loadChildren: () => import('./product/product.module').then(mod =>mod.ProductModule),
  },
  {
    path: "user-management",
    loadChildren: () => import('./user-management/user-management.module').then(mod =>mod.UserManagementModule),
  }
    ]

    
  },

 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
    
})
export class LayoutRoutingModule { }
