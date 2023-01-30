import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { UiService } from 'src/app/service/ui.service';

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

  showAddTodo: boolean = true;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

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
