import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../Models/user';
import { Payment } from '../Models/payment';



@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  isAdmin():boolean {
    let login = JSON.parse(localStorage.getItem('currentUser'));
    if(login == null) return false;
    if(login.permission < 2) return false;
    return true;
  }
}
