import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
RegisterForm: FormGroup;
submitted = false;
public signupData = { username:'', email: '', password: '',phoneNumber:'' };
 constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public register:SignupService,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit() {
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
        console.log(this.signupData)
         this.ngxService.start()
         this.register.registerUser(this.signupData).subscribe((result) => {
           this.ngxService.stop()
          this.toastr.success('An activation link is Sent to your registerd mail id.', 'Success');
            return;

        }, (err) => {
         this.ngxService.stop();
           this.toastr.error('Internal Server Error', 'SignUp Error');
          console.log(err);
        });


    }
      get f() { return this.RegisterForm.controls; }
    closeSignUp(){
    	this.dialogRef.close();
     $('html').removeClass('no-scroll');
    	
}
}
