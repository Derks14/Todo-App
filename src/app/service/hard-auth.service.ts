import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthService {

  constructor() { }
  authenticate(username, password) {
    console.log('Before ' + this.isUserLoggedIn());
    if (username === 'derrick' && password === 'killer') {
      sessionStorage.setItem('AuthenticateUser', username);
      console.log('After ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    return !(sessionStorage.getItem('AuthenticateUser') === null);
  }
  logout() {
    sessionStorage.removeItem('AuthenticateUser');
  }
}
