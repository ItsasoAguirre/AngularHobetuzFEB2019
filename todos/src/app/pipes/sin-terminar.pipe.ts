import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'sinTerminar',
  pure: false

})
export class SinTerminarPipe implements PipeTransform {

    transform(todos: Array<Todo>): Array<Todo> {
      return todos.filter(t => !t.terminado) ;
  }

}
