import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { UserService } from "../../services/user.service"
import { Payment } from '../../Models/payment';


@Component({
  selector: 'app-pp-edit',
  templateUrl: './pp-edit.component.html',
  styleUrls: ['./pp-edit.component.css']
})

export class PpEditComponent implements OnInit {

  ppForm: FormGroup;
  pp = new Payment;
  
  
  constructor(
    private userService: UserService,
    private formGroup: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() { 
    this.ppForm = this.formGroup.group({
      user: ['', Validators.required],
      pw: ['', Validators.required],
    })
  }

  send() {
    this.pp.paypalLogin = this.ppForm.controls.user.value;
    this.pp.paypalPassword = this.ppForm.controls.pw.value;
    this.userService.editPayment(this.pp)
      .subscribe();
  }
  

}
