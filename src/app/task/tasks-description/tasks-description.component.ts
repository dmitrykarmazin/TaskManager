import { Task } from './../models/task.model';
import { Component, OnInit , ViewChild, ElementRef, HostListener, ChangeDetectorRef} from '@angular/core';
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
  public editMode = false;
  @ViewChild('edit') editField: ElementRef;

  constructor(
    private activeRoute: ActivatedRoute,
    private taskService: TaskService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const id: number = this.activeRoute.snapshot.params.id;
    this.subs = this.taskService.getTaskById(id)
      .subscribe(( task: Task) => this.task = task);
  }

  enableEditMode() {
    this.editMode = true;
    console.log(this.editField);
    this.cd.detectChanges();
    this.editField.nativeElement.focus();
    // setTimeout(() => {
    //   this.editField.nativeElement.focus();
    // }, 0);
  }

  onBlur() {
    this.editMode = false;
    this.taskService.updateTask(this.task);
  }


  @HostListener('keydown', ['$event'])
  onkey(event) {
    if (this.editMode) {
      //  enter
      if (event.keyCode ==  13 ) {
        this.editMode = false;
        this.updateTask(this.task);
        event.preventDefault();
      }
      // escape
      else if (event.keyCode == 27) {
        this.editMode = false;
        event.preventDefault();
      }
      // tab 
      else if (event.keyCode == 9 ) {
        this.editMode = false;
        this.updateTask(this.task);
        event.preventDefault();
      }
    }
  }

  updateTask(task: Task) {
    this.editMode = false;
    this.taskService.updateTask(task);
  }

  OnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
