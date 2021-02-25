import { Component, OnInit } from '@angular/core';
import {LaptopService} from './laptop.service';
import {Laptop} from './laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(private laptopService : LaptopService) { }

  ngOnInit() {
    this.getLaptops();
  }
  searchLaptop : string;

  laptops : Laptop[] = [];

  getLaptops() : void
  {
    this.laptops = this.laptopService.getLaptops();
  }
}
