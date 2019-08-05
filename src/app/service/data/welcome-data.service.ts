import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }
  executeWelcomeDataService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  executeWelcomeDataServiceWithVariable(name: string) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }
}

export class HelloWorldBean {
  constructor(public message: string) { }
}
