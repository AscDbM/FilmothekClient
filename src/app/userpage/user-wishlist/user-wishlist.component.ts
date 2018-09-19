import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { History } from '../../Models/history';
@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent implements OnInit {

  wishlist: History[]=[];
  displayedColumns = ['ID','name','note'];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getWishlist();
  }

getWishlist() {
  this.userService.getWishlist()
    .subscribe(x => this.wishlist = x);
}
}