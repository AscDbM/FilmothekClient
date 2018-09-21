import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { AdminEditComponent } from '../admin-edit/admin-edit.component';
import { AdminCreateComponent } from '../admin-create/admin-create.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  users: User[]=[];
  displayedColumns = ["id","last","first","address","user","history","edit","delete","reset"];

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

  confirmReset(id:number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "300px",
      data: "Do you really want to Reset this users password?",
    });
    dialogRef.afterClosed().subscribe(x => {if(x) this.resetPassword(id)});
  }
  
  resetPassword(id:number): void {
    this.userService.resetAdminPassword(id)
      .subscribe(x => console.log(x))
  }

  delete(id:number) {
    this.userService.deleteAdmin(id)
      .subscribe();    
  }

  create() {
    let dialogRef = this.dialog.open(AdminCreateComponent, {
      width: '300px'
    });
  }

  refresh() {
    this.getAllAdmins();
  }
}