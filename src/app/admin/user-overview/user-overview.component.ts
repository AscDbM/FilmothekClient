import { Component, OnInit, AfterViewInit, Inject, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

  ngAfterViewInit() {
    
  }

  getAllUsers() {
    this.userService.getAllUsers()
      .subscribe(x => {this.users = x;
      })
  }

  edit(user:User) {
    const dialogRef = this.dialog.open(UserOverviewComponentDialog, {
      width: '250px',
      data: {
        username: user.login, 
        firstname: user.firstName,
        lastname: user.lastName,
        address: user.address
      }
    });
  }

  delete(id:number) {
    this.userService.delete(id)
      .subscribe();
  }

}

@Component({
  templateUrl: 'user-overview-dialog.html'
})
export class UserOverviewComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<UserOverviewComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data:User,  
    private userService:UserService,
    //private route:ActivatedRoute,
    
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }


    
  urlId:number
  @Input() user = new User();

  ngOnInit() {
    this.urlId = 1;//+this.route.snapshot.url.toString().slice(9);
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

    
}
/*


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



*/