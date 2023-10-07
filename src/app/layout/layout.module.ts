import { NgModule } from '@angular/core';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    
  ]
  
})
export class LayoutModule { }