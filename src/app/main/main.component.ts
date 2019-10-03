import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {
  tasks: Array<any>;
  index: number;
  id: number;
  newTask: string;
  check: boolean;
  status: string = 'in Progres';
  taskEdite: string;
  deleteDeactivate: boolean;
  editForm: boolean;
  counter: number;
  // checkboxModel: string = 'true';

  constructor() {
    this.tasks = [];

  }

  ngOnInit() {


  }
  addTask(): void {
    if (this.newTask != '') {
      const task: ITask = new Task(1, this.newTask, this.check, this.status);
      if (this.tasks.length > 0) {
        task.id = this.tasks.slice(-1)[0].id + 1;
      }
      this.tasks.push(task);
      // if(this.check){
      //   this.status = 'in Progres'
      // }
      console.log(this.tasks);
      this.newTask = '';
      this.counter = this.tasks.length;
      console.log(this.counter);
    }
  }
  staTus(i: number) {
    console.log(i);
    this.index = i;
    this.tasks[i].check = true;
    // console.log(this.index);
    // console.log(this.tasks[i]);
    console.log(this.tasks[i].check);

    if (this.tasks[i].status == 'in Progres') {
      this.tasks[i].status = 'Done';
    } else {
      this.tasks[i].status = 'in Progres';
    }
    console.log(this.tasks[i].status);
  }
  delete(i: number) {
    if (this.tasks[i].status == 'Done') {
      this.tasks.splice(i, 1);
    }

  }
  edit(i): void {
    if (this.tasks[i].task != undefined && this.tasks[i].status != 'Done') {
      this.editForm = true;
      this.taskEdite = this.tasks[i].task;
      this.index = i;
    }


  }
  save(): void {
    this.tasks[this.index].task = this.taskEdite;
    this.editForm = false;
  }


}

interface ITask {
  id: number;
  task: string;
  check: boolean;
  status: any;
}

class Task implements ITask {
  constructor(
    public id: number,
    public task: string,
    public check: boolean,
    public status: any
  ) { }

}


