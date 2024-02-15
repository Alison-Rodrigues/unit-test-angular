import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private taskList: string[] = [];

  addTask(task: string): void {
    if (task != '') {
      this.taskList.push(task);
    }
  }

  getTasks(): string[] {
    return this.taskList;
  }

  removeTask(task: string): void {
    const index = this.taskList.indexOf(task);

    this.taskList.splice(index, 1);
  }
}
