import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from './../services/task.service';
import { RouterTestingModule } from '@angular/router/testing';

import { TasksTableComponent } from './tasks-table.component';
import { HttpClient } from 'selenium-webdriver/http';
import { Task } from '../models/task.model';
import { Observable, of } from 'rxjs';

describe('TasksTableComponent', () => {
  let component: TasksTableComponent;
  let fixture: ComponentFixture<TasksTableComponent>;

  const tasks: any[] = [
    {
      'id': 1,
      'name': 'Today_task1',
      'creation_date': '2015-04-21T06:50:21',
      'due_date': '2015-04-22T23:59:00',
      'start_date': '2015-04-21T00:00:01',
      'is_completed': false,
      'is_archived': false,
      'estimated_effort': 5.5,
      'actual_effort': 3.3,
      'physical_progress': 60,
      'obj_status': 'active',
      'description': 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
      'project_id': 0
    },
    {
      'id': 11,
      'name': 'Today_task11',
      'creation_date': '2015-04-21T06:50:21',
      'due_date': '2015-04-22T23:59:00',
      'start_date': '2015-04-21T00:00:01',
      'is_completed': false,
      'is_archived': false,
      'estimated_effort': 5.5,
      'actual_effort': 3.3,
      'physical_progress': 60,
      'obj_status': 'active',
      'description': 'Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit',
      'project_id': 0,
      'tags': [
        'meeting'
      ]
    }
  ];
  class MockTaskService {
    getTasks(): Observable<Task[]> {
      return of(tasks);
    }

    getTaskById(id: number): Observable<Task[]> {
      return of(tasks[0]);
    }

  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: TaskService, useClass: MockTaskService }],
      declarations: [TasksTableComponent]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks ', () => {
    component.ngOnInit();
    expect(component.active_tasks).toEqual(tasks);

  });

  it('should render task list', () => {
    component.ngOnInit();
    expect(component.active_tasks).toEqual(tasks);

    let elements: any[] = fixture.debugElement.nativeElement.querySelectorAll('table tbody .task_link');
    expect(elements.length).toBe(2);

    expect(elements[0].textContent).toContain('Today_task1');
    expect(elements[1].textContent).toContain('Today_task11');

  });
});
