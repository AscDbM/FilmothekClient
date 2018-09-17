import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  users: User[]=[];
  displayedColumn = ["id","last","first","address","user","pw","history","edit","delete"];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(x => this.users = x)
  }

  edit(id:number) {
    this.router.navigateByUrl(`editUser/${id}`)
  }
  
  delete(id:number) {
    this.userService.delete(id)
      .subscribe();
  }
}