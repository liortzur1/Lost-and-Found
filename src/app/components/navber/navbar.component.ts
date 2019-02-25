import { Component, OnInit } from '@angular/core';
import UserService from '../../services/user.service';
import { UserModel } from '../../models/user';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarMenu implements OnInit {
  private user: UserModel;
  private userString: string;

  constructor(private userServ: UserService) {
    this.userServ.User.subscribe(val => {
      this.user = val;
      this.userString = JSON.stringify(this.user);
    })
  }

  ngOnInit() {
    this.loadUser();
  }

  public loadUser() {
    this.userServ.getUserByMailAndPassword("Daniel@gmail.com", "Aa123456").subscribe(
      res => { 
        this.user = res.user;
        this.userString = JSON.stringify(this.user);
       }
    );
  }
}
