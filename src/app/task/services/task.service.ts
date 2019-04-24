import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../models/task.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('../../../assets/tasks.json');
  }
  getTaskById(id: number): Observable<Task> {
    return this.getTasks().pipe(
       map((data: Task[]) => data.find(t => t.id == id))
    );
  }
  updateTask(task: Task) {
    // fake put request
    this.http.put('http://localhost:4200', task);
  }
}
