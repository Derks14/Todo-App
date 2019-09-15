import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BasicAuthenticationServiceService} from '../basic-authentication-service.service';
import {API_URL} from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient, private basicAuth: BasicAuthenticationServiceService ) { }
  executeWelcomeDataService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  executeWelcomeDataServiceWithVariable(name: string) {
    // let encodedString = this.createAuthHeader();
    // console.log(encodedString);
    // let headers = new HttpHeaders({
    //   Authorization: encodedString
    // });
    // console.log('about to send request');
    // // @ts-ignore
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`,
      // {headers}
    );
  }
}


export class HelloWorldBean {
  constructor(public message: string) { }
}
