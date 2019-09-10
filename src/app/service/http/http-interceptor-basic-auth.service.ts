import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }
// this function was from the HttpInterceptor class
  intercept(request: HttpRequest<any>, next: HttpHandler)  {
    let password = 'killer';
    let username = 'admin';
    let  combination  = 'Basic ' +  window.btoa( username + ':' + password);

    request = request.clone({
    setHeaders : {
    Authorization : combination
    }
    });
    return next.handle(request);
  }
}
