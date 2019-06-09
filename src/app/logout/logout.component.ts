import { Component, OnInit } from '@angular/core';
import {HardAuthService} from '../service/hard-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private hard: HardAuthService) { }

  ngOnInit() {
    this.hard.logout();
  }

}
