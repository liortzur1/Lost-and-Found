import { Component, OnInit } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { namespaceHTML } from '@angular/core/src/render3';
import { getLocaleEraNames } from '@angular/common';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: Item = { 
    id: 12,
    name: "MacBook Air 13.3",
    description: "lala",
    kind: Kind.Found,
    category: Category.Laptops,
    color: "silver",
    create_time: new Date(),
    location: "tlv",
    username: "liortzur",};

    keys = Object.keys(Category);

  constructor() { }

  ngOnInit() {
  
  }

  get test()
  {

    return JSON.stringify(this.item)
  }

}
