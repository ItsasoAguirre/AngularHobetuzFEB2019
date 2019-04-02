import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  alumnos: Array<Inscripcion>;

  url = 'http://192.168.0.79:8080/inscripcion';

  constructor(private httpClient: HttpClient) { }

  addInscripcion(alumno: Inscripcion): Observable<Array<Inscripcion>>{
    return this.httpClient.post<Array<Inscripcion>>(this.url, alumno);
  }
}
