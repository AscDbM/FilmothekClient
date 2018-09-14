import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


//checks if user is logged in, to allow access to certain paths
@Injectable({
  providedIn: 'root',
})
export class ElevatedGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //check if elevated permission
    let user = JSON.parse(localStorage.getItem('currentUser')) 
    if(user.permission > 1) return true; 

    //if not, reroute
    this.router.navigateByUrl('/home');
    return false;

  }
}