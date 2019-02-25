import { UserModel } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import UserService from 'src/app/services/user.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {
    private userDetails: UserModel = {} as UserModel; 
    private userDetailsPrev: UserModel = {} as UserModel; 

    constructor (public route: ActivatedRoute,
                 private userServ: UserService,
                 public dialog: MatDialog) {
    }

    ngOnInit (){
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.has("userDetails")) {
                this.userDetails = JSON.parse(paramMap.get("userDetails"));
                Object.assign(this.userDetailsPrev, this.userDetails);
            }
        })
    }

    saveChanges() {
        this.userServ.editUser(this.userDetails);
        Object.assign(this.userDetailsPrev, this.userDetails);
        const dialogRef = this.dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    cancelChanges() {
        Object.assign(this.userDetails, this.userDetailsPrev);
    }
}


@Component({
    selector: 'dialog-content',
    templateUrl: 'dialog-content.html',
  })

  export class DialogContent {}