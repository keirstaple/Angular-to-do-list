import { Component } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';
/// <reference path="moment.d.ts"/>

@Component ({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <h1>To Do List</h1>
    <task-list
      [taskList]="tasks"
      [currentDate]="currentDate"
      (receivedTask)="taskSelected($event)">
    </task-list>
  `
})

export class AppComponent {
  public tasks: Task [];
  public currentDate: string = moment().format('MMMM Do YYYY, h:mm:ss a');
  constructor(){
    this.tasks = [
      new Task('Create To-Do List app.'),
      new Task('Try components'),
      new Task('Clean the toilet'),
      new Task('Buy a ferrari'),
  ];
  }
  taskSelected(selectedTask: Task) : void{
    console.log('parent', selectedTask);
  }
}
