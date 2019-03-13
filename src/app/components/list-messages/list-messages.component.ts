import { Component, OnInit, Input } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item';
import {Message} from 'src/app/models/message';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  @Input() item:Item;


  messages: Message[];

  constructor(public messageService:MessageService) { }

  ngOnInit() {
    this.messageService.getMessagesByItem(this.item).subscribe(res => { this.messages = res.messages.sort(this.dateSort); });
  }

  dateSort(a, b) {
    return new Date(b.create_time).getTime() - new Date(a.create_time).getTime();
  }

  formatDate(date:string)
  {
    let formatted = new Date (date);
    return formatted.toLocaleString('en-US', { hour12: false, month: 'long', day:'numeric', year:'numeric', hour: '2-digit', minute:'2-digit'});
  }

  get messagesLength() {
    return this.messages.length;
  }



}
