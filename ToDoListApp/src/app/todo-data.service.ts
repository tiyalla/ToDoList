import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;

  toDos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.toDos.push(todo);

    return this;
  }

  postToDo(id: number): TodoDataService{
    //create new array containing elements that do not have matching id
    this.toDos = this.toDos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }


  getAllTodos(): Todo[] {
    return this.toDos;
  }

  getTodoById(id: number): Todo {

    return this.toDos
      .filter(todo => todo.id === id)
      .pop();

  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete

    });

    return updatedTodo;
  }

}
