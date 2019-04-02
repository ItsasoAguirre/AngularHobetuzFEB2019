import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  alumnos: Array<Curso>;

  url = 'http://192.168.0.79:8080/cursos';

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<Array<Curso>>{
    return this.httpClient.get<Array<Curso>>(this.url);
  }

  addCurso(alumno: Curso): Observable<Array<Curso>>{
    return this.httpClient.post<Array<Curso>>(this.url, alumno);
  }
}
