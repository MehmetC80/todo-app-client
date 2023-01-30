import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Todo Tracker';
  showAddTodo: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe({
      next: (value) => (this.showAddTodo = value),
    });
  }

  toggleAddTodo() {
    this.uiService.toggleAddTodo();
    console.log('Click tttt');
  }
}
