import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';

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
    console.log('about to send request')
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`, {headers});
  }
  isUserLoggedIn() {
    return !(sessionStorage.getItem('AuthenticateUser') === null);
  }
  logout() {
    sessionStorage.removeItem('AuthenticateUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}
