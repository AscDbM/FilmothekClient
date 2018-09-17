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
  displayedColumns = ["id","last","first","address","user","history","edit","delete"];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllAdmins();
  } 

  getAllAdmins() {
    this.userService.getAllAdmins()
      .subscribe(x => {this.users = x
        console.log(this.users);}
      )}

  edit(id:number) {
    this.router.navigateByUrl(`editModerator/${id}`)
  }
  
  delete(id:number) {
    this.userService.delete(id)
      .subscribe();
  }
}