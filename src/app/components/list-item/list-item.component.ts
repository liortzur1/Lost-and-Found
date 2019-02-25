import { Component, OnInit } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import { fadeInItems } from '@angular/material';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items: Item[] = [
    { 
      id: 12,
      name: "MacBook Air 13.3",
      description: "lala",
      kind: Kind.Lost,
      category: Category.Laptops,
      color: "silver",
      create_time: new Date(),
      location: "tlv",
      username: "liortzur"},
  
      { 
        id: 14,
        name: "iPhone X",
        description: "bobobo",
        kind: Kind.Lost,
        category: Category.Phones,
        color: "balck",
        create_time: new Date(),
        location: "beeri",
        username: "liortzur"}
  ];

  constructor() { }

  ngOnInit() {
  }

  get itemsLenght()
  {
    return this.items.length;
  }

}
