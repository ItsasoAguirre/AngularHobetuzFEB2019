import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo>;
  nuevoTodo: Todo;

  constructor() { }

  ngOnInit() {
    this.tareas = [
      new Todo('Pasear a Goku', false, false),
      new Todo('Sacar la basura', false, false),
    ];
    this.nuevoTodo = new Todo('', false, false);
  }

  addToArray() {
    this.tareas.push(this.nuevoTodo);
    this.nuevoTodo = new Todo('', false, false);
    console.log(this.tareas);
  }
  terminada(tarea: Todo): void {
    tarea.terminado = !tarea.terminado;
  }

  setStyles(tarea: Todo): any {
      /*if (tarea.terminado){
        return 'terminada'
*/

    return {
      'importante': tarea.importante,
      'terminada': tarea.terminado
    }
  }

  }


