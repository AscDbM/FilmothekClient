import { Component, OnInit, AfterViewInit, Inject, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit, AfterViewInit {

  users: User[]=[];
  displayedColumns = ["id","last","first","address","user","history","edit","delete","reset"];
  text:string;

  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  ngAfterViewInit() {
    
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(x => {this.users = x;
      })
  }

  edit(user:User) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '250px',
      data: user,
    });
  }

  confirmReset(id:number): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: "Do you really want to reset this users Password?"
    });

    dialogRef.afterClosed().subscribe(x => {
      if(x==true) this.reset(id);
    })
  }

  reset(id:number): void {
    this.userService.resetPassword(id)
      .subscribe(x => console.log(x));
    }
  

  delete(id:number):void {
    this.userService.delete(id)
      .subscribe();
  }

}

