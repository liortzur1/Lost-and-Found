import { Component} from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import {MatDialog, MatDialogRef} from '@angular/material';
import {ItemService} from '../../services/item.service'
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { namespaceHTML } from '@angular/core/src/render3';
import { getLocaleEraNames } from '@angular/common';
import { keyframes } from '@angular/animations';

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

  public item = new Item();



  constructor(public itemService: ItemService, public dialogRef: MatDialogRef<CreateItemDialogComponent>) { }

  onSubmit()
  {
    this.item.username = "5c5b0138c4b83825e480744f"; // TODO: logged in user id
    this.itemService.createItem(this.item);
    this.dialogRef.close();
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