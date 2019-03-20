
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { EquipoComponent } from './equipo/equipo.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path: '', redirectTo: '/equipos', pathMatch: 'full'},
  {path: 'jugadores', component: JugadoresComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
