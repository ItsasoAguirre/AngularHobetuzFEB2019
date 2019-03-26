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
  nuevoEquipo: Equipo;
  equipoSeleccionado: Equipo;
  formGroup: FormGroup;
  constructor( private formBuilder: FormBuilder, private equipoService: EquipoService ) { }


  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
    this.equipos = this.equipoService.getEquipos();
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
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
    this.equipoService.addEquipo(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    this.buildForm();
    console.log(this.equipos);
  }
  register(formGroup: FormGroup): void {
    console.log(formGroup);
    if (formGroup) {
      if (formGroup.value) {
        this.nuevoEquipo.nombre = formGroup.value.nombre;
        this.nuevoEquipo.ciudad = formGroup.value.ciudad;
        this.nuevoEquipo.socios = formGroup.value.socios;
        this.nuevoEquipo.anyoFundacion = formGroup.value.fundacion;
        this.nuevoEquipo.escudo = formGroup.value.escudo;
        this.addToArray();
      }
    }
  }

  mostrarEquipo(equipo: Equipo): void {
    console.log("-Equipo recogido" + equipo);
    this.equipoSeleccionado = equipo;
    console.log(" Equipo seleccinado" + this.equipoSeleccionado);

  }
}
