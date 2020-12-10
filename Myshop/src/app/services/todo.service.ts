import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:8081/Todo/';
  constructor(private http: HttpClient) {
  }

  getTodo() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getDetailTodo(idTodo) {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/' + idTodo);
  }

  getTodos() {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(id) {
    return this.http.delete(this.url + id);
  }

  addTodo(t: Todo) {
    return this.http.post(this.url, t);
  }

  searchTodo(id) {
    return this.http.get(this.url + id);
  }

  putTodo(t: Todo) {
    return this.http.put(this.url, t);
  }
}
