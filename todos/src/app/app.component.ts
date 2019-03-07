import { Component } from '@angular/core';

// Los componentes en realidad tb son directivas
@Component({
  // Las 3 opciones que son basicas para un componente

  // nombre del componente
  selector: 'app-root',
  // html del componente
  templateUrl: './app.component.html',
  // Estilos del componente
  styleUrls: ['./app.component.css'],
  // providers: []
})
export class AppComponent {
  title = 'todos';
}
