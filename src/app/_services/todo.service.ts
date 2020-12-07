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

    getTodoById(id: number): any {
        return this.http.get('http://localhost/gitpro/angular-crud-jwt/src/public/todo?id='+id);
    }

    updateTodoById(todo) {
        let serData =  JSON.stringify(todo);
        if (todo.id === 0) {     
            return this.http.post('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/todo', serData);
        } else {
            return this.http.put('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/todo' , serData);
        }
    }

    deleteTodoDetail(id) {
        return this.http.delete('http://127.0.0.1/gitpro/angular-crud-jwt/src/public/todo?id='+id);
    }
}
