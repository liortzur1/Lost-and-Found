import { Component, OnInit, Input } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import {ItemService} from '../../services/item.service'
import{NgForm} from '@angular/forms'
import { createNgModuleFactory } from '@angular/core/src/view';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  @Input() scope_kind:Kind;
  item: Item;

  constructor(public itemService: ItemService) { 
    
  }

  ngOnInit() {
    this.item = {
      id: 0,
      name: "",
      description: "",
      kind: this.scope_kind,
      category: Category.Laptops,
      color: "",
      create_time: new Date(),
      location: "",
      username: ""}
  }

  onSearchItem() {
    this.itemService.searchItems(this.item.name, this.item.kind, this.item.category, this.item.create_time);
  }

  get aa()
  {
    return JSON.stringify(this.item);
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
