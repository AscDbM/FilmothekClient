import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Payment } from '../../Models/payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  payment = new Payment;



  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPayment();
  }

  getPayment() {
    this.userService.getPayment()
      .subscribe(x => {this.payment = x});
  }

  rerouteCC() {
    this.router.navigateByUrl("/editCC")
  }

  reroutePP() {
    this.router.navigateByUrl("/editPP")
  }

  rerouteBank() {
    this.router.navigateByUrl("/editBank")
  }

}
