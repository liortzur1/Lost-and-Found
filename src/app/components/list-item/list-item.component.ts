import { Component, OnInit, Input } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import { fadeInItems } from '@angular/material';
import {ItemService} from '../../services/item.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() scope_kind:Kind;

  items: Item[];
  private itemsSub: Subscription;

  constructor(public itemService: ItemService) {
    
   }

  ngOnInit() {
    this.items = this.itemService.getItemsByKind(this.scope_kind);
    this.itemsSub = this.itemService.getItemsUpdatelistener().subscribe((items:Item[]) => {this.items = items});
  }

  get itemsLenght()
  {
    return this.items.length;
  }

}
