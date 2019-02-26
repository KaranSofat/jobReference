import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {AppSettings } from './../constants';
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
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }
   private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
    registerUser(jsonPayload):Observable<any>{
    return this.http.post(AppSettings.API_ENDPOINT + 'registerUser',jsonPayload,this.noAuthHeader);
  }

  checkEmail(jsonPayload):Observable<any>{
    return this.http.post(AppSettings.API_ENDPOINT + 'checkEmail',jsonPayload,httpOptions);
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
