import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidateEqualTo } from '../../validators/equalTo.validator';

@Component({
  selector: 'app-pw-edit',
  templateUrl: './pw-edit.component.html',
  styleUrls: ['./pw-edit.component.css']
})
export class PwEditComponent implements OnInit {

  pwForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PwEditComponent>,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.pwForm = this.formBuilder.group({
      old: ['', Validators.required],
      new: ['', Validators.minLength(6)],
      //new2:['', ValidateEqualTo(new2, new)]
    })
  }



}
