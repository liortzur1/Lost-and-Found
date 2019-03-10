import { Component, OnInit } from '@angular/core';
import UserService from 'src/app/services/user.service';
import { UserModel } from './../../models/user';
import { Router } from '@angular/router';
import {CustomerService} from '../utils/CustomerService';
import { Globals } from './../utils/Globals';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUp {
    private userDetails: UserModel = {} as UserModel; 

    constructor(private userServ: UserService,
                private router: Router,
                private customer: CustomerService,
                private globals: Globals) {

    }

    addUser() {
      this.userServ.CreateOrUpdateUser(this.userDetails);
      this.globals.connectedUser = this.userDetails;
      this.customer.setToken(this.userDetails.mail as string);
      this.router.navigate(['/home']);
    }
}