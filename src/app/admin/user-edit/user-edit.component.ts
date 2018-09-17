import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  urlId:number
  @Input() user = new User();

  constructor(
    private userService:UserService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.urlId = +this.route.snapshot.url.toString().slice(9);
    this.getUser(this.urlId);
  }

  getUser(id:number) {
    this.userService.getUserById(id)
      .subscribe(x => this.user = x);
  }

  send() {
    this.userService.editUserById(this.user)
      .subscribe();
  }

  disable(): boolean {
    for(let key in this.user) {
      if(this.user[key] == null) return true
    }
    return false;
  }

  confirm() {
    this.disable()
  }

}
