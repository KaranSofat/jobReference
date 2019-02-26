import { Injectable } from '@angular/core';
import { throwError, Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
 public dataSubject$: Subject<any> = new BehaviorSubject<any>('');

getUrl(): Observable<any> {
    return this.dataSubject$.asObservable();
}

setUrl(dataToPush: any): void{
    this.dataSubject$.next(dataToPush);
 }
}