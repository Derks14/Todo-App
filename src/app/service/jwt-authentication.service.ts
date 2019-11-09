import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../app.constant';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }
  executeJWTAuthentication(username, password) {
    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
      data => {
        sessionStorage.setItem(AUTHENTICATEUSER, username);
        sessionStorage.setItem(TOKEN, 'Bearer ' +  data.token);
        return data;
      }
    ));
  }
  executeJWTRegistration() {
    // return this.http.post()
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




export const TOKEN = 'token';
export const AUTHENTICATEUSER = 'AuthenticateUser';
