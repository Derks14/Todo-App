import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BasicAuthenticationServiceService} from '../basic-authentication-service.service';
import {JwtAuthenticationService} from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuth: BasicAuthenticationServiceService, private jwtAuthenticate: JwtAuthenticationService) { }
// this function was from the HttpInterceptor class
  intercept(request: HttpRequest<any>, next: HttpHandler)  {
    // let password = 'killer';
    // let username = 'admin';
    // let  combination  = 'Basic ' +  window.btoa( username + ':' + password);
    // this.basicAuth.getAuthenticatedToken();
    if (this.basicAuth.getAuthenticatedToken() && this.basicAuth.getAuthenticatedUser()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.basicAuth.getAuthenticatedToken()
        }
      });
    }
    if (this.jwtAuthenticate.getAuthenticatedToken() && this.jwtAuthenticate.getAuthenticatedUser()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.jwtAuthenticate.getAuthenticatedToken()
        }
        });
    }
    return next.handle(request);
  }

}
