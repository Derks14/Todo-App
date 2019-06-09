import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'this is 4teen in the building';
  name = '';
  constructor( private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {
    console.log(this.message);
    this.name = this.route.snapshot.params.name;
  }
  todosPage() {
    this.router.navigate(['todos']);
  }
  getWelcomeMessage() {
    console.log('Welcome 4teen');
  }
}
