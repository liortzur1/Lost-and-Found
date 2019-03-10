import { barData } from './../../models/bar-data';
import { pieData } from './../../models/pie-data';

import { Component } from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class Stats {
  private barChartData: barData[];
  private pieChartData: pieData[];
  
  constructor() {
    this.barChartData = [
      {
        letter: 'a',
        frequency: 2
      },
      {
        letter: 'b',
        frequency: 8
      },
      {
        letter: 'c',
        frequency: 4
      },
      {
        letter: 'd',
        frequency: 13
      }
    ];

    this.pieChartData = [
      {
        label: 'a',
        value: 2
      },
      {
        label: 'b',
        value: 8
      },
      {
        label: 'c',
        value: 4
      },
      {
        label: 'd',
        value: 13
      }
    ]
  }

  latitude = 32.083824;
  longitude = 34.791062;
  mapType = 'roadmap';
}
