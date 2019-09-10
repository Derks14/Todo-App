import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveTodosFromServer(name: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodosFromServer(name: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  retrieveTodoFromServer(name: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${name}/todos/${id}`);
  }
  updateTodoToServer(name: string, id: number, todo: Todo) {
    return this.http.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }
  saveTodoToServer(name: string, todo: Todo) {
    return this.http.post<Todo>(`http://localhost:8080/users/${name}/todos`, todo);
  }
}
