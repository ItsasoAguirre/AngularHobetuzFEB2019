import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']

})
export class EquipoComponent implements OnInit {

  equipos: Array<Equipo>;
  equipoSeleccionado: Equipo;
  formGroup: FormGroup;
  constructor( private formBuilder: FormBuilder, private equipoService: EquipoService ) { }


  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
    this.equipos = this.equipoService.getEquipos();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fundacion: [0, [Validators.required, Validators.minLength(4)]],
      socios: [0, [Validators.required, Validators.minLength(4)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      escudo: ['', [Validators.required]]
    });
  }
  addToArray() {
    this.equipos = this.equipoService.addEquipo(this.formGroup.value);
    this.formGroup.reset();
  }

  mostrarEquipo(equipo: Equipo): void {
    console.log("-Equipo recogido" + equipo);
    this.equipoSeleccionado = equipo;
    console.log(" Equipo seleccinado" + this.equipoSeleccionado);

  }
}
