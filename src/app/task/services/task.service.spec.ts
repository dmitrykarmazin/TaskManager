import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {

  let httpMock: HttpTestingController;
  let service: TaskService;

  const tasks: any[] = [
    {
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [TaskService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(TaskService);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should get all task list>', () => {

    service.getTasks().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(tasks);
    });

    const req = httpMock.expectOne(`../../../assets/tasks.json`);
    expect(req.request.method).toBe('GET');
    req.flush(tasks);

  });

  it('should get task by id', () => {

    service.getTaskById(11).subscribe(task => {
      expect(task).toEqual(tasks[1]);
    });

    const req = httpMock.expectOne(`../../../assets/tasks.json`);
    expect(req.request.method).toBe('GET');
    req.flush(tasks);

  });

  it('should update task', () => {
    const changedTask: any = {
      'id': 11,
      'name': 'MY COOL TASK',
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
    };


    service.updateTask(changedTask);

    const req = httpMock.expectOne(`http://localhost:4200/task/11`);
    expect(req.request.method).toBe('PUT');
    req.flush(tasks);

  });
});
