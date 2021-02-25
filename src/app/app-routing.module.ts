import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MobileComponent} from './mobile/mobile.component';
import {LaptopComponent} from './laptop/laptop.component';
import {AccessoriesComponent} from './accessories/accessories.component';

const routes: Routes = [
  {
    path : 'mobile-component', component : MobileComponent
  },
  {
    path : 'laptop-component', component : LaptopComponent
  },
  {
    path : 'accessories-component',  component : AccessoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
