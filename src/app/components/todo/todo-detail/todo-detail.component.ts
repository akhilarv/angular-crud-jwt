import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;    
  constructor( private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.todoId = params['id'];
          if (this.todoId !== undefined) {
                this.getTodoDetailById(this.todoId);
                this.mode = 'Edit';    
          } else {
                this.todoDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  getTodoDetailById(id) {
     this.todoService.getTodoById(parseInt(id))
    .subscribe(res => {
      this.todoDetail  = res['data'];
    });
  }
  
  onTodoSubmitForm(form) {
    if(form.valid) {
        this.todoService.updateTodoById(this.todoDetail)
        .subscribe(
          res => {
            this.router.navigate(['/todo-list']);
          });
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }

}
