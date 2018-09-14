import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { UserService } from "../../services/user.service"
import { Payment } from '../../Models/payment';


@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  bankForm: FormGroup;
  bank = new Payment;
  
  
  constructor(
    private userService: UserService,
    private formGroup: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() { 
    this.bankForm = this.formGroup.group({
      iban: ['', Validators.pattern("[A-Z]{2}[0-9]{2}[0-9A-Z]{1,30}")], //2 Capitals -> 2 Numbers -> 1-30 Capitals or Numbers
      name: ['', Validators.required],
    })
  }

  send() {
    this.bank.bankaccIBAN = this.bankForm.controls.iban.value;
    this.bank.bankaccOwner = this.bankForm.controls.name.value;
    this.userService.editPayment(this.bank)
      .subscribe();
  }
  

}
