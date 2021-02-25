import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mobiles: any[], price: number): any {

    if(!mobiles) return [];
    if(!price) return mobiles;

    return mobiles.filter(mob => {return mob.Price<price});
  }

}
