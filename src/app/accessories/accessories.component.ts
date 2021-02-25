import { Component, OnInit } from '@angular/core';
import { accessories , Accessories} from './accessories'

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accessories = Accessories;

}
