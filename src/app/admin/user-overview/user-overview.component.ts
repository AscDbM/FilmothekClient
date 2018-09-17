import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';

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
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  ngAfterViewInit() {
    
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(x => {this.users = x;
       console.log(this.users); 
      })
  }

  edit(id:number) {
    this.router.navigateByUrl(`editUser/${id}`)
  }

  delete(id:number) {
    this.userService.delete(id)
      .subscribe();
  }

}
