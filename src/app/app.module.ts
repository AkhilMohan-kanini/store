import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FilterPipe } from './mobile/filter.pipe';
import {FilterLaptopPipe} from './laptop/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    AccessoriesComponent,
    FilterPipe,
    FilterLaptopPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
