import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'terminada',
  pure: false
})
export class TerminadaPipe implements PipeTransform {

  transform(todos: Array<Todo>): Array<Todo> {
    return todos.filter(t => t.terminado) ;
  }

}
