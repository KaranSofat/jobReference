import { Component, OnInit, ElementRef  } from '@angular/core';
import { DialogService } from './../../dialogService/dialoge-service';
import { LoginComponent } from './../../pops/login/login.component';
import { SignupComponent } from './../../pops/signup/signup.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showLogin:boolean = false;
 constructor(private dialogService: DialogService,private el: ElementRef) {}

  ngOnInit() {
  }

  openLogin(){
   $('html').addClass('no-scroll');
    
  	this.dialogService.open(LoginComponent, {
     autoFocus: false,
     panelClass: 'overflowNone'

    })
  	
  }

  openSignUp(){
  $('html').addClass('no-scroll');
    this.dialogService.open(SignupComponent, {
    autoFocus: false,
     panelClass: 'overflowNone'
     
    })
    
  }




}
