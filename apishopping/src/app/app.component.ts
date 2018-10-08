import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apishopping';
  show_side_bar: boolean;
  
  cartClickEventHandler($event){
    console.log("Event received: "+ $event);
    this.show_side_bar = $event;
  }
}
