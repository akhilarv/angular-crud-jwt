import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../_models/todo';
import { TodoService } from '../../../_services/todo.service';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { tick } from '@angular/core/testing';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    public todos: Todo[] = [];

    displayedColumns: string[] = ['id','title', 'salution', 'firstName','middleName','lastName', 'phone','email','todoImage'];
    discls:string[] = ['name','lname'];

    perData;

    public dataSource;

    constructor(private router: Router, private todoService: TodoService) { }

    loadPerdata(){

        this.perData = new MatTableDataSource<PeriodicElement>(dataTl);
        console.log(this.perData);
        return this.perData; 
     }

     loadTododata(){
 
        this.dataSource = new MatTableDataSource<Todo>(ELEMENT_DATA);
        console.log(this.dataSource);
        return this.dataSource;
 
     }

    ngOnInit(){
        this.loadAllTodoList();
        this.loadPerdata();
        this.loadTododata();
    }
    
    loadAllTodoList() {
        this.todoService.getAllTodos().subscribe(todos => {
            this.todos = todos;
        });
    }

    onClickEditTodoDetail(id) {
        console.log(id);
        this.router.navigate(['/todo-detail'], { queryParams: { id: id } });
    }

    onClickAddTodo() {
        this.router.navigate(['/todo-detail']);
    }

    onClickTodoDelete(id) {
        this.todoService.deleteTodoDetail(id);
        this.loadAllTodoList();
    }
}

export interface PeriodicElement {
    name: string;
    lname:string;
  }
  const dataTl: PeriodicElement[] = [{name:'akhila',lname:'anoop'},{name:'Aditi',lname:'anoop'}];
  
  const ELEMENT_DATA: Todo[] = [
      { id:1,title: 'First',salution: 'working', firstName: 'First',middleName: 'middle',
        lastName: 'Lastname',phone: '998889889',email: 'akhila@gmail.com',todoImage:'data:image/jpg;base64,'
        }
    ];