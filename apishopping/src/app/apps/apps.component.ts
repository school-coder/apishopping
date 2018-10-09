import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  title = "Applications";

  gaugeType = "semi";
  gaugeValue = 28;
  gaugeLabel = "Number of Request";
  gaugeAppendText = "req";

  constructor() { }

  ngOnInit() {
  }

}
