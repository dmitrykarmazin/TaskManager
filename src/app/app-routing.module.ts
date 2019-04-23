import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksTableComponent } from './task/tasks-table/tasks-table.component';
import { TasksDescriptionComponent } from './task/tasks-description/tasks-description.component';

const routes: Routes = [
  { path: '', component: TasksTableComponent },
  { path: 'task/:id', component: TasksDescriptionComponent },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
