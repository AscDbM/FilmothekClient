import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
