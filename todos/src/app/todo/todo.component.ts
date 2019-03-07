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
  public searching: boolean = false;

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

  /**
  * Show the search results based in the faqs
  * @function showSearchResults
  * @param {any} event
  * @return {void}
  */
 public showSearchResults(event: any): void {
  if (event.target.value.length >= 3) {
    this.searching = true;
  } else {
    this.searching = false;
  }
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


