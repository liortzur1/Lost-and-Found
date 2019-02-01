import { Component } from '@angular/core';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarMenu {
  user = {
    username: "דניאל צימר",
    isAdmin: true
  }
}
