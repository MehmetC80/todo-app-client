import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = { id: 0, text: '', day: '', reminder: false };

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
