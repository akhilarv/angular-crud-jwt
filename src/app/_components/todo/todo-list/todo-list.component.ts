import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../../_models/todo';
import { TodoService } from '../../../_services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    public todos: Todo[] = [];
    constructor(private router: Router, private todoService: TodoService) { }

    ngOnInit() {
        this.loadAllTodoList();
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