
import { Component } from '@angular/core';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class Stats {
  constructor() {

  }

  latitude = 32.083824;
  longitude = 34.791062;
  mapType = 'roadmap';
}
