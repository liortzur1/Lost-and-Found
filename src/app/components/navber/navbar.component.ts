import { Component, OnInit, Input } from '@angular/core';
import UserService from '../../services/user.service';
import { UserModel } from '../../models/user';
import { Globals } from './../utils/Globals';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarMenu implements OnInit {
  private userString: string;

  @Input() user: UserModel; 

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.userString = JSON.stringify(this.globals.connectedUser);
  }
}
