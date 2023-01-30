import { Injectable } from '@angular/core';
//import { TODOS } from 'src/db/mock-todos';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.todoAppBaseUrl + '/todos');
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(
      environment.todoAppBaseUrl + `/todos/${todo.id}`
    );
  }

  updateTodoReminder(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      environment.todoAppBaseUrl + `/todos/${todo.id}`,
      todo
    );
  }
}
