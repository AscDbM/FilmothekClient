import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { History } from '../../Models/history';

@Component({
  selector: 'app-user-history-admin',
  templateUrl: './user-history-admin.component.html',
  styleUrls: ['./user-history-admin.component.css']
})
export class UserHistoryAdminComponent implements OnInit {

  urlId:number;
  history:History[];
  displayedColumns = ['id','name','sDate','eDate'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.urlId = +this.route.snapshot.url.toString().slice(8);
    this.getHistory(this.urlId);
  }

  getHistory(id:number) {
    this.userService.getHistoryById(id)
      .subscribe(x => this.history = x);
  }

}
