import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PriorizarPipe } from './pipes/priorizar.pipe';
import { FiltroBuscarPipe } from './pipes/filtro-buscar.pipe';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    PriorizarPipe,
    FiltroBuscarPipe,
    JugadoresComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // para poder poner ngmodel en los inputs
    ReactiveFormsModule, // para los formularios reactivos a partir de angular 7
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
