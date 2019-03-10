import { Component, OnInit } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item';
import {Message} from 'src/app/models/message';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages: Message;
  m: string;

  constructor(public messageService:MessageService) { }

  ngOnInit() {
    this.messageService.getMesseges().subscribe(res => { this.messages = res.messages });
  }


}
