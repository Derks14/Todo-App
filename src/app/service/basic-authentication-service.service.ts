import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor( private http: HttpClient) { }
  authenticate(username, password) {
    console.log('Before ' + this.isUserLoggedIn());
    if (username === 'derrick' && password === 'killer') {
      sessionStorage.setItem('AuthenticateUser', username);
      console.log('After ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  executeAuthenticationServiceFromServer(username, password) {
    let basicAuthenticationHeader = 'Basic ' +  window.btoa( username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeader
    });
    console.log('about to send request');
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATEUSER, username);
            sessionStorage.setItem(TOKEN, basicAuthenticationHeader);
            return data;
          }
        )
      );
  }
  isUserLoggedIn() {
    return !(sessionStorage.getItem('AuthenticateUser') === null);
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATEUSER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }
  logout() {
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(AUTHENTICATEUSER);
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}

export const TOKEN = 'token';
export const AUTHENTICATEUSER = 'AuthenticateUser';
