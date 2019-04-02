import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos: Array<Alumno>;

  url = 'http://192.168.0.79:8080/alumnos';

  constructor(private httpClient: HttpClient) { }

  getAlumnos(): Observable<Array<Alumno>>{
    return this.httpClient.get<Array<Alumno>>(this.url);
  }

  addAlumno(alumno: Alumno): Observable<Array<Alumno>>{
    return this.httpClient.post<Array<Alumno>>(this.url, alumno);
  }
}
