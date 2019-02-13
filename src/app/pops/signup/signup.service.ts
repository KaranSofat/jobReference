import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {AppSettings } from './../../constants';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

    registerUser(jsonPayload):Observable<any>{
    return this.http.post(AppSettings.API_ENDPOINT + 'registerUser',jsonPayload,httpOptions);
  }




  registerUsers(user){


      return this.http.post<any>(AppSettings.API_ENDPOINT + 'registerUser', JSON.stringify(user), httpOptions).subscribe(
      tap((user) => console.log('user')),
      catchError(this.handleError<any>('error'))
    );  
  }

  getUser(){

    return this.http.get(AppSettings.API_ENDPOINT + 'registerUser').pipe(
      map(this.extractData));

  }


   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
