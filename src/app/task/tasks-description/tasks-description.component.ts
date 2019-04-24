import { Task } from './../models/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tasks-description',
  templateUrl: './tasks-description.component.html',
  styleUrls: ['./tasks-description.component.scss']
})
export class TasksDescriptionComponent implements OnInit {
  public id: number;
  public task: Task;
  public subs: Subscription;
  constructor(
    private activeRoute: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id: number = this.activeRoute.snapshot.params.id;

    this.subs = this.taskService.getTaskById(id)
      .subscribe(( task: Task) => this.task = task);

  }
  OnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
