import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']

})
export class EquipoComponent implements OnInit {
  equipos: Array<Equipo>;
  nuevoEquipo: Equipo;
  searchText: string;
  equipoSeleccionado: Equipo;
  formGroup: FormGroup;
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
    this.equipos = [];
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    this.searchText = '';
  }

  private buildForm() {
    const fundacion = 0;
    const nombre = '';
    this.formGroup = this.formBuilder.group({

      nombre: '',
      fundacion: 0,
      escudo: '',
      socios: 0,
      ciudad: ''

    });
  }


  addToArray() {
    this.equipos.push(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    console.log(this.equipos);
  }
  completo(): boolean {
    if ( this.nuevoEquipo.socios !== 0
      && this.nuevoEquipo.anyoFundacion !== 0 && this.nuevoEquipo.nombre !== '' && this.nuevoEquipo.ciudad !== '') {
        return false;

    }
    return true;
  }

  setStyles(equipo: Equipo): any {
    if (equipo.socios > 1000) {
      return 'muchosSocios';
  }}

  mostrarEscudo(equipo: Equipo): void {
    this.equipoSeleccionado = equipo;
  }
}
