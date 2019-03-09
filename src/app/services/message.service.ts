import { Injectable } from '@angular/core';
import { Item, Kind, Category } from 'src/app/models/item'
import {Message} from 'src/app/models/message'
import { Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { Http, Headers } from '@angular/http';

@Injectable({providedIn: 'root'})

export class MessageService {
    private messages: Message[];

      private messagesUpdate = new Subject<Message[]>();
      private serverApi = 'http://localhost:3000/api';

      constructor(private http: Http) { }
    
      getMesseges(){
        let URI = `${this.serverApi}/messages/liort`;
        var obs = this.http.get(URI).pipe(map(res => res.json()));
        obs.subscribe(res => { this.messages = res.messages });
        return obs;
    }


}