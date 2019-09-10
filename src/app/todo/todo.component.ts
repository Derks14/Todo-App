import { Component, OnInit } from '@angular/core';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoDataService} from '../service/data/todo-data.service';
import {isNegativeNumberLiteral} from 'tslint';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  description: string;
  todo: Todo;
  constructor(private route: ActivatedRoute, private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log('Extracted id ' + this.id);
    this.todo = new Todo(this.id, '', false, null);
    console.log(this.todo);
    if (this.id != -1) {
      this.todoService.retrieveTodoFromServer('derrick', this.id).subscribe(
        data => {
          console.log('' + data.targetDate);
          this.todo = data;
        }
      );
    }
  }
  updateTodo() {
    console.log('About to update todo');
    console.log(this.todo);
    // tslint:disable-next-line:triple-equals
    if (this.id == -1) {
      console.log('new data');
      console.log(this.todo);
      this.todoService.saveTodoToServer('Derrick', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    } else {
      console.log('updating log');
      this.todoService.updateTodoToServer('Derrick', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
