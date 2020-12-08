import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todo.service';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { tick } from '@angular/core/testing';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    displayedColumns: string[] = ['firstName','middleName','lastName', 'phone','email','actions'];
    
    public dataSource;

    constructor(private router: Router, private todoService: TodoService) { }

    ngOnInit(){
        this.loadAllTodoList();
    }
    
    loadAllTodoList() {
        this.todoService.getAllTodos().subscribe(todos => {
           return this.dataSource = new MatTableDataSource<any>(todos['data']);
        });
    }

    onClickEditTodoDetail(id) {
        this.router.navigate(['/todo-detail'], { queryParams: { id: id } });
    }

    onClickAddTodo() {
        this.router.navigate(['/todo-detail']);
    }

    onClickTodoDelete(id) {
        this.todoService.deleteTodoDetail(id)
        .subscribe(
            res => {
            this.loadAllTodoList();
            });
    }
}