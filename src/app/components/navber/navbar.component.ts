import { Component, OnInit } from '@angular/core';
import UserService from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarMenu implements OnInit {
  private user: Object;

  constructor(private userServ: UserService) {

  }

  ngOnInit() {
    this.loadUser();
  }

  public loadUser() {
    this.userServ.getUserByUsernameAndPassword("AT", "Bb123456").subscribe(
      res => { this.user = res.user }
    )
  }
}
