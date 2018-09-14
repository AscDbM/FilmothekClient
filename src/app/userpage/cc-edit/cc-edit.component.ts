import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Payment } from '../../Models/payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cc-edit',
  templateUrl: './cc-edit.component.html',
  styleUrls: ['./cc-edit.component.css']
})
export class CcEditComponent implements OnInit {

  paymentForm: FormGroup;
  newPayment = new Payment;
  month: string[] = []; //[1,2,3,4,5,6,7,8,9,10,11,12];
  year: string[] = [];

 constructor(
   private userService: UserService,
   private formGroup: FormBuilder,
   private router: Router,
 ) { }

 ngOnInit() {
   this.paymentForm = this.formGroup.group({
     ccNumber: ['', Validators.pattern("\\d{16}")], //any 16 digit number
     cc3: ['', Validators.pattern("\\d{3}")], //any 3 digit number
     ccName: ['', Validators.pattern("([A-z] ?)* [A-z]+")], //any name, at least 1 whitespace in the middle
     ccMonth: ['', Validators.required],
     ccYear: ['', Validators.required],
     ccType: ['', Validators.required]
   })

   for(let i=0; i < 12; i++) {
     let str: string;
     if(i+1 < 10) str = "0"+(i+1).toString();
     else str = (i+1).toString(); 
     this.month.push(str);
   }

   for(let i=2018; i < 2030; i++) {
     this.year.push(i.toString());
   }

   this.getPayment();
 }

 getPayment() {
   this.userService.getPayment()
    .subscribe(x => this.newPayment=x);
 }


 get form() {
   return this.paymentForm.controls;
 }

 send() {
   this.newPayment.creditcardNumber = this.form.ccNumber.value;
   this.newPayment.creditcardOwner = this.form.ccName.value;
   this.newPayment.creditcardSecret = this.form.cc3.value;
   this.newPayment.creditcardTyp = this.form.ccType.value;
   this.newPayment.creditcardExpire = this.form.ccYear.value+"-"+this.form.ccMonth.value;

   this.userService.editPayment(this.newPayment)
     .subscribe();

   this.router.navigateByUrl('myPage');
 }

}
