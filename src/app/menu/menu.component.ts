import { Component, OnInit } from '@angular/core';
import {HardAuthService} from '../service/hard-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private hard: HardAuthService) { }

  ngOnInit() {
  }

}
