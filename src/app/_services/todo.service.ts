import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../_models/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    apiURL: string = 'http://localhost/gitpro/angular-crud-jwt/src/public/todo';

    constructor(private http:HttpClient) { }
    
    getAllTodos(){


       return this.http.get('http://localhost/gitpro/angular-crud-jwt/src/public/todo');
        
    }

    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        console.log(todoArray);
        return todoArray
            .filter(todo => todo.id === id)
            .pop();
    }

    updateTodoById(todo): Observable<Todo> {
        if (todo.id === 0) {
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
            todo.id = ++todoid;
            todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        } else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
            for (var i in todoSaveArray) {
                if (todoSaveArray[i].id === todo.id) {
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        return of(todo);
    }

    deleteTodoDetail(id) {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));
            }
        }
    };
}
