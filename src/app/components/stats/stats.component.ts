import { Item } from './../../models/item';
import { map } from 'rxjs/operators';
import { ItemService } from './../../services/item.service';
import { barData } from './../../models/bar-data';
import { pieData } from './../../models/pie-data';
import { Component } from '@angular/core';
import { _MatListItemMixinBase } from '@angular/material';
import { from } from 'rxjs';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class Stats {
  private barChartData: barData[];
  private pieChartData: pieData[];
  private allItems: Item[];
  private lostItems: Item[];
  private foundItems: Item[];
  
  constructor(private itemService: ItemService) {
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
  }

  ngOnInit() {
    this.itemService.getItemsByCategoryPieChart().subscribe(res => {
      console.log(res.data);
      this.pieChartData = res.data.map(item => { 
        return ({
          label: `${item._id.name} (${item.count})`,
          value: item.count
        });
      })
    });

    this.itemService.getItems().subscribe(res => {
      this.allItems = res.items;
      this.lostItems = this.allItems.filter(item => item.kind == "Lost");
      this.foundItems = this.allItems.filter(item => item.kind == "Found");
    })
  }

  latitude = 32.083824;
  longitude = 34.791062;
  mapType = 'roadmap';
}
