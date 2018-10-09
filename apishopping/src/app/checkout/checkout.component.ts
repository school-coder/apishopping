import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  title = "Check Out";

  active_tab = "v-pills-basic-tab";

  app_name: string;
  app_desc: string;
  
  count1: string;
  count2: string;

  card_number: string;
  expiry_date: string;

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(active_tab: string){
    this.active_tab = active_tab;
  }

}
