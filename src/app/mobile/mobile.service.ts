import { Injectable } from '@angular/core';
import {Mobile ,Mobiles} from './mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }

  getMobiles(): Mobile[] {
    return Mobiles;
  }
}
