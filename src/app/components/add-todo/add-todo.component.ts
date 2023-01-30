import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  text: string = '';
  day: Date | '' = '';
  reminder: boolean = false;

  constructor() {}

  onSubmit() {
    if (!this.text) {
      alert('Please add Text!!!');
      return;
    }

    const newTodo: Todo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTodo.emit(newTodo);

    // Rest values
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
