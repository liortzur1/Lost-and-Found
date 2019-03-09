import { Component, OnInit, Input } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import { fadeInItems } from '@angular/material';
import {ItemService} from '../../services/item.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {UpdateItemComponent} from '../update-item/update-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() scope_kind:Kind;

  items: Item[];
  private itemsSub: Subscription;

  constructor(public itemService: ItemService, public dialog: MatDialog) {
    
   }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => { this.items = res.items });
    this.itemsSub = this.itemService.getItemsUpdatelistener().subscribe((items:Item[]) => {this.items = items});
  }

  edit(item:Item) {
    const dialogRef = this.dialog.open(UpdateItemComponent, { data: item ,height: '520px', width: '900px'});

    dialogRef.afterClosed().subscribe(result => {console.log( `Result: ${result}` )});
  }

  delete(item:Item) {
    //this.items.slice(this.items.indexOf(item), 1);
    this.itemService.deleteItem(item);
  }

  get itemsLenght()
  {
    return this.items.length;
  }

  itemDate(date:string)
  {
    let formatted = new Date (date);
    return formatted.toLocaleDateString();
  }

  usernameById(user:string)
  {
    // TODO: query for user display name by ID
    return "Lior Tzur"
  }

}
