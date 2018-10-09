import { Component, OnInit, Input } from '@angular/core';
import { api } from '../../assets/models/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  apis: api[] = [
    { name: "SugarSync API", icon: "sugarsync.png"},
    { name: "CloudFlare API", icon: "cloudflare.png"}
  ];

  ngOnInit() {
  }

  removeAPI(api: api) {
    console.log("Selected API: "+ api.name);
    var index = this.apis.indexOf(api);
    this.apis.splice(index, 1);
  }

}
