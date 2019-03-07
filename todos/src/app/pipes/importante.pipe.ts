import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'importante',
  pure: false
})
export class ImportantePipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    return todos.sort((a, b) => (b.importante && !a.importante) ? 1 : -1); }
  }


