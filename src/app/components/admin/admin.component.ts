import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import UserService from '../../services/user.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class Admin {
  form: FormGroup;
  users = [];

  constructor(private formBuilder: FormBuilder,
              private userServ: UserService,
              public dialog: MatDialog) {
    this.form = this.formBuilder.group({
      users: new FormArray([], minSelectedCheckboxes(1))
    });

    this.getUsers();
  }

  private addCheckboxes() {
    this.users.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.users as FormArray).push(control);
    });
  }

  getUsers() {
    this.userServ.getAllUsers().subscribe(usersJson => {
      this.users = usersJson.users;
      this.addCheckboxes();
    });
  }

  clearData() {
    this.users = [];
    this.form = this.formBuilder.group({
      users: new FormArray([], minSelectedCheckboxes(1))
    });
  }

  submit() {
    const dialogRef = this.dialog.open(RemoveUserDialogContent);

    const selectedUsersMails = this.form.value.users
      .map((v, i) => v ? this.users[i].mail : null)
      .filter(v => v !== null);
      this.userServ.deleteUsers(selectedUsersMails).subscribe(res => {
        this.clearData();
        this.getUsers();
        }
      );
      
  }
}

function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})

export class RemoveUserDialogContent {}
