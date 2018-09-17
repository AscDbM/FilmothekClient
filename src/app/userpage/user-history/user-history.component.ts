import { Component, OnInit } from '@angular/core';

import { User } from '../../Models/user';
import { Movie } from '../../Models/movie';
import { History } from '../../Models/history';
import { UserService} from '../../services/user.service';
import { MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  history: History[]=[];
  displayedColumns = ['ID','name','startDate','endDate'];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.userService.getHistory()
      .subscribe(x => this.history = x)
  }

  
}
