import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => (this.todos = todos),
      error: (err: Error) => console.error('Observer got an error ' + err),
      complete: () => console.log('Observer got complete notification'),
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe({
      next: (todos) =>
        (this.todos = this.todos.filter((item) => item.id !== todo.id)),
      error: (err: Error) => console.error('Observer got an error ' + err),
      complete: () => console.log('Observer got complete notification'),
    });
  }

  toggleReminder(todo: Todo) {
    todo.reminder = !todo.reminder;
    this.todoService.updateTodoReminder(todo).subscribe({
      next: (totos) => this.todos,
    });
  }
}
