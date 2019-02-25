import { Component, OnInit } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get categories()
  {

    return Object.keys(Category);
  }

  get kinds()
  {

    return Object.keys(Kind);
  }

}
