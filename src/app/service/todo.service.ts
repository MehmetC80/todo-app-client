import { Injectable } from '@angular/core';
import { TODOS } from 'src/db/mock-todos';
import { Todo } from '../interfaces/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }
}
