import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Page not found';
  contact = 'Please contact 4teen for support';

  constructor() { }

  ngOnInit() {
  }

}
