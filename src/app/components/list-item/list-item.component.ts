import { Component, OnInit, Input } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import { fadeInItems } from '@angular/material';
import {ItemService} from '../../services/item.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {UpdateItemComponent} from '../update-item/update-item.component';
import { CreateMessageDialogComponent } from '../create-message/create-message-dialog.component'

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
    this.itemService.getItemsByKind(this.scope_kind).subscribe(res => { this.items = res.items.filter(
      item => item.kind == this.scope_kind
  ) });
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

  writeMessage(item:Item){
    const dialogRef = this.dialog.open(CreateMessageDialogComponent, {data: item, height: '550px', width: '600px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log( `Result: ${result}` )
      if (result) {
        // Event to refresh messages list
      }
    });
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
