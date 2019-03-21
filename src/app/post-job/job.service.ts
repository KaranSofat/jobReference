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
export class JobService {
  constructor(private http: HttpClient) { }
  getStates() {
    return this.http.get(AppSettings.API_ENDPOINT  + 'states');
  }
  getCities() {
    return this.http.get(AppSettings.API_ENDPOINT  + 'cities');
  }
  getEducations() {
    return this.http.get(AppSettings.API_ENDPOINT  + 'educations');
  }
}
