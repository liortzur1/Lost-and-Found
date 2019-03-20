import { Component } from '@angular/core';
import { Globals } from '../utils/Globals';
import { connect } from 'http2';

@Component({
  selector: 'my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivity {

  private user_id:string;

  constructor(private globals:Globals) {
    this.user_id = globals.connectedUser._id;
  }
}
