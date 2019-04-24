import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from './../services/task.service';
import { Subscription } from 'rxjs';
import { Task } from './../models/task.model';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})
export class TasksTableComponent implements OnInit {
  public active_tasks: Task[] = [];
  subs: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.subs = this.taskService.getTasks()
      .subscribe((tasks: Task[]) => this.active_tasks = tasks.filter(task => task.obj_status === 'active'));
  }

  OnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
