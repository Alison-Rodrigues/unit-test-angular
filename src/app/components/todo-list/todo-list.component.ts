import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  inputValue: string = '';

  taskList: string[] = [];

  constructor(private todoListService: TodoListService) {
    this.taskList = this.todoListService.getTasks();
  }

  addTask(task: string): void {
    this.todoListService.addTask(task);
  }

  removeTask(task: string): void {
    this.todoListService.removeTask(task);
  }

}
