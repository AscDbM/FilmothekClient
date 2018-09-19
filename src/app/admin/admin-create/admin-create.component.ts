import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef} from '@angular/material';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {


  user = new User();
  adminForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdminCreateComponent>,
    private userService:UserService,
    private formBuilder: FormBuilder,
  ) {

   }

 

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      login: ["", Validators.pattern("\\w+")], //any word chars
      firstName: ["", Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      lastName: ["", Validators.pattern("[A-Za-zäÄöÖüÜ]+")],
      address: ["", Validators.required],
      rights: ["",Validators.required],
    })
  }

  send() {
    Object.assign(this.user,this.adminForm.value)
    this.userService.createAdmin(this.user)
      .subscribe();
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}