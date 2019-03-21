import { Component, OnInit, ElementRef  } from '@angular/core';
import { DialogService } from './../../dialogService/dialoge-service';
import { LoginComponent } from './../../pops/login/login.component';
import { SignupComponent } from './../../pops/signup/signup.component';
import { DataService } from './../shared.service';
import { LoginService } from "./../../userlogin/login.service";
import * as $ from 'jquery';
import { Router,NavigationEnd } from "@angular/router";
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showLogin:boolean = false;

token = ""
 url:any
 constructor(private loginService : LoginService,private dialogService: DialogService,
  private el: ElementRef,public dataService: DataService,
  private router : Router,) {

  this.token = this.loginService.getToken();    
  console.log(this.token)
  this.subscribeRouterEvents();
 }
 subscribeRouterEvents = () => {
  this.router.events.pipe(
    filter(e => e instanceof NavigationEnd)
  ).subscribe(() => {
     if(this.dataService.urlExists()){
        this.url = true
     }else{
        this.url = false
     };
  });
}

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
