import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorEqualTo } from '../../validators/equalTo.validator';

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
      oldPw: ["", Validators.required],
      newPw: ["", Validators.minLength(6)],
      newPw2:["", Validators.required],
    },{validator: ValidatorEqualTo("newPw","newPw2")})
  }

  send():void {
    this.userService.editPw(this.pwForm.get('newPw').value, this.pwForm.get('oldPw').value)
      .subscribe();
    this.dialogRef.close();
  }
}
