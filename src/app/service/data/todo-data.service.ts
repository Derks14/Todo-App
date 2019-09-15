import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  retrieveTodosFromServer(name: string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${name}/todos`);
  }

  deleteTodosFromServer(name: string, id: number) {
    return this.http.delete(`${API_URL}/users/${name}/todos/${id}`);
  }

  retrieveTodoFromServer(name: string, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${name}/todos/${id}`);
  }
  updateTodoToServer(name: string, id: number, todo: Todo) {
    return this.http.put(`${API_URL}/users/${name}/todos/${id}`, todo);
  }
  saveTodoToServer(name: string, todo: Todo) {
    return this.http.post<Todo>(`${API_URL}/users/${name}/todos`, todo);
  }
}
