import { Component} from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import {MatDialog} from '@angular/material';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { namespaceHTML } from '@angular/core/src/render3';
import { getLocaleEraNames } from '@angular/common';
import { keyframes } from '@angular/animations';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(CreateItemDialogComponent, {height: '480px', width: '900px'});

    dialogRef.afterClosed().subscribe(result => {console.log( `Result: ${result}` )});
  }


}

@Component({
  selector: 'app-create-item-dialog',
  templateUrl: './create-item-dialog.component.html'
})
export class CreateItemDialogComponent {

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

  get categories()
  {

    return Object.keys(Category);
  }

  get kinds()
  {

    return Object.keys(Kind);
  }

}