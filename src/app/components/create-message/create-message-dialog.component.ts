import { Component, Inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/message';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Item, Kind, Category } from 'src/app/models/item';
import { Globals } from './../utils/Globals';
import UserService from 'src/app/services/user.service';
import { stringify } from '@angular/compiler/src/util';
import { UserModel } from 'src/app/models/user';


@Component({
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.css']
})
export class CreateMessageDialogComponent {

  public message = new Message();
  private toUserName: string;

  constructor(public messageService: MessageService,
    public dialogRef: MatDialogRef<CreateMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item,
    private globals: Globals,
    private userService: UserService)
    {
    this.message.toUser = item.username;
    this.message.item = item._id;
    this.message.fromUser = this.globals.connectedUser._id;
    this.userService.getUserByID(this.message.toUser).subscribe(res => { this.toUserName =  res.user.fullName; });
   }

  onSubmit()
  {
    this.messageService.createMessage(this.message);
    this.dialogRef.close(true);
  }
  
}
