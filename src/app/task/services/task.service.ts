import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../models/task.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskList: Task[];

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    if (this.taskList) {
      return of(this.taskList);
    }
    return this.http.get<Task[]>('../../../assets/tasks.json').pipe(
      map((data: Task[]) => {
        this.taskList = data;
        return this.taskList;
      })
    );
  }
  getTaskById(id: number): Observable<Task> {
    return this.getTasks().pipe(
       // tslint:disable-next-line:triple-equals
       map((data: Task[]) => data.find(t => t.id == id))
    );
  }
  updateTask(task: Task) {
    // fake put request
    this.http.put(`http://localhost:4200/task/${task.id}`, task).subscribe();

    // const outdatedTask = this.taskList.find((i) => i.id === task.id);
    // console.log(outdatedTask);
    // const index = this.taskList.indexOf(outdatedTask);

    // this.taskList[index] = task;

  }
}
