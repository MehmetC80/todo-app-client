import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = { id: 0, text: '', day: '', reminder: false };
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo: Todo) {
    this.onToggleReminder.emit(todo);
  }
}
