import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { AdminCreateComponent } from '../admin-create/admin-create.component';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  users: User[]=[];
  displayedColumns = ["id","last","first","address","user","history","edit","delete"];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllAdmins();
  } 

  getAllAdmins() {
    this.userService.getAllAdmins()
      .subscribe(x => {this.users = x
        console.log(this.users);}
      )}

  edit(user:User) {
    let dialogRef = this.dialog.open(AdminEditComponent, {
      width: '250px',
      data: user
    })
  }
  
  delete(id:number) {
    this.userService.deleteAdmin(id)
      .subscribe();
  }

  create() {
    let dialogReg = this.dialog.open(AdminCreateComponent, {
      width: '300px'
    })
  }
}