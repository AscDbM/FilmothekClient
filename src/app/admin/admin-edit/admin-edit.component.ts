import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {


  user:User = this.data;
  adminForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User,
    private userService:UserService,
    private formBuilder: FormBuilder,
  ) {

   }

 

  ngOnInit() {
    console.log(this.user);
    this.adminForm = this.formBuilder.group({
      login: [this.user.login, Validators.pattern("\\w+")], //any word chars
      firstName: [this.user.firstName, Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      lastName: [this.user.lastName, Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      address: [this.user.address, Validators.required],
      rights: ["",Validators.required],
    })
  }

  send() {
    Object.assign(this.user,this.adminForm.value)
    this.userService.editAdmin(this.user)
      .subscribe();
    this.dialogRef.close();
  }
}
