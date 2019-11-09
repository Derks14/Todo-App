import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardAuthService} from '../service/hard-auth.service';
import {BasicAuthenticationServiceService} from '../service/basic-authentication-service.service';
import {JwtAuthenticationService} from '../service/jwt-authentication.service';

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
  constructor(private router: Router, private hard: HardAuthService,
              private basicAuthenticationService: BasicAuthenticationServiceService,
              private jwtAuthenticationService: JwtAuthenticationService) { }

  ngOnInit() {
    this.basicAuthenticationService.retriveDishesFromServer().subscribe(
      data => {
        console.log(data);
      }
    );
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
  handlebasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationServiceFromServer(this.username, this.password).subscribe(
      data => {
        console.log('subscribed successfully');
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        // if (!this.after) {
        //   this.router.navigate(['welcome', this.username]);
        console.log('after' + this.basicAuthenticationService.isUserLoggedIn());
      },
      error => {
        console.log(error);
        this.after = true;
      }
    );
  }
  handleJWTAuthLogin() {
    this.jwtAuthenticationService.executeJWTAuthentication(this.username, this.password).subscribe(
      data => {
        console.log('JWT Authentication');
        console.log(data);
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.after = true;
      }
    );
  }
}
