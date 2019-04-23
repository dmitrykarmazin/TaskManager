import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksDescriptionComponent } from './tasks-description/tasks-description.component';

@NgModule({
  declarations: [TasksTableComponent, TasksDescriptionComponent],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
