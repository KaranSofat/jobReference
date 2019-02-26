import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoginService } from './../userlogin/login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
RegisterForm: FormGroup;
submitted = false;
public signupData = { username:'', email: '', password: '',phoneNumber:'' };
 constructor(
 
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public register:SignupService,
    private ngxService: NgxUiLoaderService,
    private loginService: LoginService,
    private router : Router,
  ) {}

  ngOnInit() {
   if(this.loginService.isLoggedIn()){
      this.router.navigateByUrl('/dashboard');
    };
   this.RegisterForm = this.formBuilder.group({
            
            username: ['', [Validators.required]],
            password: ['', [Validators.required,Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required,Validators.minLength(10)]],
        });

  }

  registerCandidate = function(){
    this.submitted = true;
   if (this.RegisterForm.invalid) {
         this.toastr.error('Please fill all fields.', 'SignUp Error');
            return;
    }
    
         this.ngxService.start()
         this.register.registerUser(this.signupData).subscribe((result) => {
         this.ngxService.stop();
        this.toastr.success('An activation link is Sent to your registerd mail id.', 'Success');
            return;

        }, (err) => {
    
         this.ngxService.stop();
           this.toastr.error(err.error.error, 'SignUp Error');
        });


    }
      get f() { return this.RegisterForm.controls; }
    closeSignUp(){
  
     $('html').removeClass('no-scroll');
    	
}
}
