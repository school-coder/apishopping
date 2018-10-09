import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})

export class TitlebarComponent implements OnInit {

  currentUrl: string;
  show_sidebar: boolean;

  @Output() cartEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {
      this.router.events.subscribe((_: NavigationEnd) => { 
        if(!!_.url) {
          this.currentUrl = _.url;
          console.log("The current url is "+ this.currentUrl);
        }
      });
      this.show_sidebar = false;
   }

  ngOnInit() {
    
  }

  onCartClick(){
    this.show_sidebar = !this.show_sidebar;
    this.cartEvent.emit(this.show_sidebar);
  }
}
