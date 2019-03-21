import { Injectable } from '@angular/core';
import { throwError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
@Injectable()
export class DataService {
    constructor(
        private router : Router,
      ) {}
    
    url = "";   
 public dataSubject$: Subject<any> = new BehaviorSubject<any>('');

getUrl(): Observable<any> {
    return this.dataSubject$.asObservable();
}

setUrl(dataToPush: any): void{
    this.dataSubject$.next(dataToPush);
 }

 urlExists(){
     this.url = this.router.url
     if(this.url == "/"){
         return false;
     }else{
         return true;
     }
 }
}