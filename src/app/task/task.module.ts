import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TasksDescriptionComponent } from './tasks-description/tasks-description.component';

@NgModule({
  declarations: [TasksTableComponent, TasksDescriptionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class TaskModule { }
