import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../../../_services/todo.service';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatTableModule
  ],
  declarations: [TodoListComponent],
  providers: [
    TodoService
  ]
})
export class TodoListModule { }
