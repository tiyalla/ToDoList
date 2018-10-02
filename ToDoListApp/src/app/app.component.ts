import { Component } from '@angular/core';
import { TodoDataService} from '../todo-dataservice/todo-data.service';
import {Todo} from '../todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  // title = 'ToDoListApp';
  todos = [];
  newTodo : Todo = new Todo();
  constructor(private todoDataService: TodoDataService){

  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodos(){
    return this.todoDataService.getAllTodos();
  }
}
