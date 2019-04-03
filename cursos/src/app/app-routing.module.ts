import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [
  {path: '', redirectTo: '/equipos', pathMatch: 'full'},
  {path: 'jugadores', component: CursoComponent},
  {path: 'anadirAlumno', component: AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
