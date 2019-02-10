import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { UserModel } from '../../models/user'
import UserService from 'src/app/services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {
    private userDetails: UserModel; 

    constructor (public route: ActivatedRoute,
                 private userServ: UserService) {
    }

    ngOnInit (){
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has("userDetails")) {
                this.userDetails = JSON.parse(paramMap.get("userDetails"));
            }
        })
    }

    saveChanges() {
        console.log(this.userDetails);
        this.userServ.editUser(this.userDetails);
    }
}