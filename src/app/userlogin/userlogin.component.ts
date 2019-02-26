import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import * as $ from 'jquery';
import { LoginService } from './login.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
   signinForm: FormGroup;
   public loginData = { username:'',  password: '', };
   serverErrorMessages:"";
    submitted = false;
   constructor(
    private formBuilder: FormBuilder,
  private toastr: ToastrService,
  private loginService: LoginService,
  private router : Router,
      private ngxService: NgxUiLoaderService
  ) {
      

   }

  ngOnInit() {
    if(this.loginService.isLoggedIn()){
    this.router.navigateByUrl('/dashboard');
  };
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
        this.ngxService.start()
         this.loginService.login(this.loginData).subscribe(
      res => {
      this.ngxService.stop();
        this.loginService.setToken(res['token']);
        this.router.navigateByUrl('/dashboard');
      },
      err => {
      this.ngxService.stop();
      this.serverErrorMessages = err.error.error;
      this.toastr.error(this.serverErrorMessages, 'Login Error');
        
      }
    );

    }
      get f() { return this.signinForm.controls; }

  closeLogin(){
 $('html').removeClass('no-scroll');
  }

}
