import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardAuthService} from '../service/hard-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  after = false;
  error = 'Invalid Login credentials';
  constructor(private router: Router, private hard: HardAuthService) { }

  ngOnInit() {
  }
  handleLogin() {
    // this.after = !(this.username === 'derrick' && this.password === 'killer');
    // if (!this.after) {
    //   this.router.navigate(['welcome', this.username]);
    this.after = !this.hard.authenticate(this.username, this.password);
    if (!this.after) {
      this.router.navigate(['welcome', this.username]);
    }
  }
}
