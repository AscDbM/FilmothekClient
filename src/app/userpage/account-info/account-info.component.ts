import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material'

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { PwEditComponent } from '../pw-edit/pw-edit.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  user = new User;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getCurrentUser()
      .subscribe(x => this.user = x);
  }

  

  editPw(neww:string, old:string): void {
    let dialogRef = this.dialog.open(PwEditComponent, {
      width: '250px'
    })
    this.userService.editPw({newPw: neww, oldPw: old})
      .subscribe();
  }
}
