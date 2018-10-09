import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  title = "Check Out";

  active_tab = "v-pills-apis-tab";

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(active_tab: string){
    this.active_tab = active_tab;
  }

}
