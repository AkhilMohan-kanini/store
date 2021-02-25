import { Injectable } from '@angular/core';
import {Laptop} from './laptop'

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  laptops : Laptop[] =[
      {ModelName : "Inspiron 4532" , BrandName : "DELL" , Price : 68000 , Ram : "8GB" , Processor : "i7" , cpuConfig : "Quad Core"},
      {ModelName : "15" ,  BrandName : "HP" , Price : 27000 , Ram : "2GB" , Processor : "i5" , cpuConfig : "Single Core"},
      {ModelName : "IdeaPad"  , BrandName : "Lenovo" , Price : 90000 , Ram : "16GB" , Processor:"i7", cpuConfig : "Octa Core" },  
      {ModelName : "Inspiron 4500" , BrandName : "DELL" , Price: 42000 , Ram : "32GB" , Processor:"i9" , cpuConfig: "Hexa Core "},
      {ModelName : "30" , BrandName : "HP" , Price : 56000 , Ram : "32GB" , Processor: "i3" , cpuConfig : "Dual Core"},
      {ModelName : "Inspiron 3240" , BrandName : "DELL" , Price : 65000 , Ram : "16GB" , Processor : "i5" , cpuConfig : "Octa Core"}
  ]


  getLaptops():Laptop[]
  {
    return this.laptops;
  }
}
