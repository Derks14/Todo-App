import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {ActivatedRoute, Router} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome to home ( Inside Welcome component)';
  messageFromService: string;
  errorFromService: string;
  name = '';
  errorOne = false;
  constructor( private route: ActivatedRoute, private router: Router, private data: WelcomeDataService) {}

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
  }
  todosPage() {
    this.router.navigate(['todos']);
  }
  getWelcomeMessageWithParameter() {
    this.data.executeWelcomeDataServiceWithVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessage() {
    console.log(this.data.executeWelcomeDataService());
    this.data.executeWelcomeDataService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response) {
    this.messageFromService = response;
    console.log(response);
  }
  handleErrorResponse(error) {
    this.errorOne = true;
    this.errorFromService = error.error.message;
    console.log(this.errorFromService);
  }
}
