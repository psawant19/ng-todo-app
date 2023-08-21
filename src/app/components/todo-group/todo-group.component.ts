import { Component } from '@angular/core';
import { iTodoGroup } from 'src/app/interfaces/todo-group';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.css'],
})
export class TodoGroupComponent {
  data: any;
  constructor() {}

  todoGroup: iTodoGroup[] = [
    {
      title: 'Todo-Group1',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
    {
      title: 'Todo-Group2',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
    {
      title: 'Todo-Group3',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
    {
      title: 'Todo-Group4',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
    {
      title: 'Todo-Group5',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
    {
      title: 'Todo-Group6',
      list: ['Todo-Item1', 'Todo-Item2'],
    },
  ];
}
