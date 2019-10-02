import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tasks: Array<object>;
  id: number;
  newTask: string;
  check: boolean;
  status: boolean;

  constructor() {
    this.tasks = [];
   }

  ngOnInit() {
  }
  addTask(): void {
    const task: ITask = new Task (1, this.newTask, this.check, this.status)
    this.tasks.push(task)
  }

}

interface ITask {
  id: number;
  task: string;
  check: boolean;
  status: boolean;
}

class Task implements ITask {
  constructor(
    public id: number,
    public task: string,
    public check: boolean,
    public status: boolean
  ) { }

}
