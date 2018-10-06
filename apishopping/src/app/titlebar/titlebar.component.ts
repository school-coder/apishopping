import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})

export class TitlebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
      this.router.events.subscribe((_: NavigationEnd) => { 
        if(!!_.url) {
          this.currentUrl = _.url;
          console.log("The current url is "+ this.currentUrl);
        }
      });
      
   }

  ngOnInit() {
    
  }

}
