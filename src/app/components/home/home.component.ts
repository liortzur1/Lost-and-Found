import { UserModel } from './../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from './../utils/Globals';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home {
  private user: UserModel = {} as UserModel;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private globals: Globals,
              ) {

  }
  
  ngOnInit()
  {    
    this.route.
      queryParams.
      subscribe(params => {
        this.user = this.globals.connectedUser;
    })

  }

}
