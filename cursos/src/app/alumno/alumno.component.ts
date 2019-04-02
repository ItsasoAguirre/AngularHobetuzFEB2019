import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';

import { AlumnoService} from '../services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnosList: Array<Alumno>;
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.getAlumnos()
    .subscribe(alumnos => {
      console.log(alumnos);
      this.alumnosList = alumnos;
      console.log(this.alumnosList);
    });
  }

}
