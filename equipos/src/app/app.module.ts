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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ListaequiposComponent } from './listaequipos/listaequipos.component';
import { SeleccionarJugadoresPipe } from './pipes/seleccionar-jugadores.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    PriorizarPipe,
    FiltroBuscarPipe,
    JugadoresComponent,
    Error404Component,
    ListaequiposComponent,
    SeleccionarJugadoresPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, // para poder poner ngmodel en los inputs
    ReactiveFormsModule, // para los formularios reactivos a partir de angular 7
    AppRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
