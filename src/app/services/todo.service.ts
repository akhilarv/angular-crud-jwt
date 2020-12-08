import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    apiBaseTodoURL: string = 'http://localhost/gitpro/angular-crud-jwt/src/public/todo';

    constructor(private http:HttpClient) { }
    
    getAllTodos(){
       return this.http.get(`${this.apiBaseTodoURL}`);        
    }

    getTodoById(id: number): any {
        return this.http.get(`${this.apiBaseTodoURL}?id=${id}`);
    }

    updateTodoById(todo) {
        let serializeTodoData =  JSON.stringify(todo);
        if (todo.id === 0) {     
            return this.http.post(`${this.apiBaseTodoURL}`, serializeTodoData);
        } else {
            return this.http.put(`${this.apiBaseTodoURL}` , serializeTodoData);
        }
    }

    deleteTodoDetail(id) {
        return this.http.delete(`${this.apiBaseTodoURL}?id=${id}`);
    }
}
