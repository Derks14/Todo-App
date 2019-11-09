import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuser: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.newuser);
  }

}
export class User {
  constructor(
    public username: string,
    public  password: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public role: string,
  ) {}
}
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    // return null if controls havent initialised yet
    if (!control || !matchingControl) {
      return null;
    }
    // return null if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.value) {
      return null;
    }
    // set error on the matching if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
