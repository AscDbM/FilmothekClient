import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  @Input() user = this.data;
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User,
    private userService:UserService,
    private formBuilder: FormBuilder,
  ) { }

 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [this.user.login, Validators.pattern("\\w+")], //any word chars
      first: [this.user.firstName, Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      last: [this.user.lastName, Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      address: [this.user.address, Validators.required],
      perm: ["", Validators.required],
    })
  }

  send() {
    this.userService.editAdmin(this.user)
      .subscribe();
    this.dialogRef.close();
  }

}
