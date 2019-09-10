import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [];
  message: string;
  username: string;
  constructor(private getTodos: TodoDataService, private router: Router ) { }
  ngOnInit() {
    this.retrieveTodosForClient();
  }
  retrieveTodosForClient() {
    this.getTodos.retrieveTodosFromServer(this.username).subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
    );
  }
  deleteTodosForClient(username, id) {
    this.getTodos.deleteTodosFromServer('Derrick', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} deleted successfully`;
        this.retrieveTodosForClient();
      }
    );
  }
  updateTodosForClient(id) {
    console.log(`Update made on todo ${id}`);
    this.router.navigate(['todos', id]);
  }
  saveTodoForClient() {
    this.router.navigate(['todos', -1]);
    console.log('saving new Todo');
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
