import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  title = "Applications";

  gaugeType = "semi";
  gaugeValue = 1100;
  gaugeLabel = "Number of Request";
  gaugeAppendText = "req";
  max = 2000;

  thresholdConfig = {
    '0': {color: 'green'},
    '1000': {color: 'orange'},
    '1500': {color: 'red'}
  };
  constructor() { }

  ngOnInit() {
  }

}
