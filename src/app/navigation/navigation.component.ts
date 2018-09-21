import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public keyword = "";
  
  constructor(
    private SnackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigationToSearch(){
    this.router.navigate(['/search']);
    console.log(this.keyword)
  }

  hasElevatedPermission(): boolean {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if(user == null || user.permission < 2) return false;
    if(user.permission > 1) return true;    
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem('currentUser')) return true;
    return false;
  }

  logout() {
    this.loginService.logout();
    if(!localStorage.getItem("currentUser"))
    {
      this.SnackBar.open("You have been logged out", "dismiss", {duration: 3000});
    }
  }

}
