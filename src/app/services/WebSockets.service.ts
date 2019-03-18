import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';

const SERVER_URL = "http://localhost:3000/";

@Injectable({providedIn: 'root'})
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = socketIo('http://localhost:3000',{ transports : ['websocket'] });
   }



}