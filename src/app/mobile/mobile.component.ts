import { Component, OnInit } from '@angular/core';
import { Mobile} from './mobile';
import { MobileService } from './mobile.service';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private mobileService : MobileService) { }

  cost : number;

  ngOnInit() {
    this.getMobiles();
  }

 mobiles:Mobile[] = [];
 

 getMobiles():void {
   this.mobiles = this.mobileService.getMobiles();
 }

}
