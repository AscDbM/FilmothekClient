import { Component, OnInit, AfterViewInit, Inject, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit, AfterViewInit {

  users: User[]=[];
  displayedColumns = ["id","last","first","address","user","history","edit","delete"];

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

  getAllUsers() {
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

  delete(id:number) {
    this.userService.delete(id)
      .subscribe();
  }

}
