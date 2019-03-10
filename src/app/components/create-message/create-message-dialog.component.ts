import { Component, Inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/message';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Item, Kind, Category } from 'src/app/models/item';


@Component({
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.css']
})
export class CreateMessageDialogComponent {

  public message = new Message();

  constructor(public messageService: MessageService, public dialogRef: MatDialogRef<CreateMessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public item: Item) {
    this.message.toUser = item.username;
    this.message.item = item._id;
    // TODO: fromUser is the logged in user
    this.message.fromUser = "5c8401ef20669508dc956d6c";
   }

  onSubmit()
  {
    this.dialogRef.close();
  }
  
  usernameById(user:string)
  {
    // TODO: query for user display name by ID
    return "Lior Tzur"
  }

}
