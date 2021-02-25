import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLaptop'
})
export class FilterLaptopPipe implements PipeTransform {

  transform(laptops:any[], searchLaptop:string): any{
    if(!laptops) return [];
    if(!searchLaptop) return laptops;

    searchLaptop = searchLaptop.toLowerCase();
    
    return laptops.filter(
      item =>{
        return item.BrandName.toLowerCase().includes(searchLaptop);
      }
    );
  }

}
