import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tareas: Array<Todo>;
  nuevoTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.nuevoTodo = new Todo('', false, false);
    this.tareas = this.todoService.getTodos();
  }

  addToArray() {
    this.todoService.addTodo(this.nuevoTodo);
    this.nuevoTodo = new Todo('', false, false);
  }
  terminada(tarea: Todo): void {
    this.tareas = this.todoService.updateTodo(tarea);
    console.log(this.tareas);
  }



  setStyles(tarea: Todo): any {
      /*if (tarea.terminado){
        return 'terminada'*/

    return {
      'importante': tarea.importante,
      'terminada': tarea.terminado
    };
  }

  }


