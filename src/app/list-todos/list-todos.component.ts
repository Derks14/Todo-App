import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'learn statistics this evening', false, new Date()),
    new Todo(2, 'Then continue with the angular', false, new Date()),
    new Todo(3, 'Sleep for 5 hours', false, new Date()),
    new Todo(4, 'Go for tomorrows Micro electronics class', false, new Date()),
    new Todo(5, 'Don\'t skip the statistics class', false, new Date()),
    new Todo(6, 'Don\'t forget to learn on the Angular', false, new Date()),
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ) {}
}
