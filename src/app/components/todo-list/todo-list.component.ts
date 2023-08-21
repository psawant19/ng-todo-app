import { Component, Input } from '@angular/core';
import { iTodoGroup } from 'src/app/interfaces/todo-group';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() group: any;
}
