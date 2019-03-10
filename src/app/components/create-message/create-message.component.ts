import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { CreateMessageDialogComponent } from './create-message-dialog.component'
import { Item, Kind, Category } from 'src/app/models/item';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent  {

  item: Item = {
    _id : "5c82e3afdc991c22383ccb60",
    name : "Galaxy S9",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    kind : Kind.Lost,
    category : Category.Phones,
    color : "Grey",
    create_time : new Date(),
    location : "Be'eri",
    username : "5c5b0138c4b83825e480744f"
  };

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(CreateMessageDialogComponent, {data: this.item, height: '550px', width: '600px'});

    dialogRef.afterClosed().subscribe(result => {console.log( `Result: ${result}` )});
  }
}
