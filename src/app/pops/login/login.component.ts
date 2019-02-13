import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   signinForm: FormGroup;
    submitted = false;
   constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
  private toastr: ToastrService
  ) {
      

   }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
            
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
  }
   
   onSignin() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signinForm.invalid) {
         this.toastr.error('Please provide valid credentials.', 'Login Error');
            return;
        }

        this.toastr.success('Hello world!', 'Toastr fun!');
    }
      get f() { return this.signinForm.controls; }

  closeLogin(){

this.dialogRef.close();
 $('html').removeClass('no-scroll');
  }

}
