import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let toDo = new Todo({title: 'hi', complete:true });
    expect(todo.title).toEqual('hi');
    expect(todo.complete).toEqual(true);
  })
});
