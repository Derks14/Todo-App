import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  executeWelcomeDataService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  executeWelcomeDataServiceWithVariable(name: string) {
    let encodedString = this.createAuthHeader();
    console.log(encodedString);
    let headers = new HttpHeaders({
      Authorization: encodedString
    });
    console.log('about to send request')
    // @ts-ignore
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`, {headers});
  }
  createAuthHeader() {
    let password = 'killer';
    let username = 'admin';
    return 'Basic ' +  window.btoa( username + ':' + password);
  }
}


export class HelloWorldBean {
  constructor(public message: string) { }
}
