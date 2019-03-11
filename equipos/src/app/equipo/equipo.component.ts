import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipos: Array<Equipo>;
  nuevoEquipo: Equipo;
  searchText: string;
  constructor() { }

  ngOnInit() {
    registerLocaleData(es);
    this.equipos = [];
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    this.searchText = '';
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

readURL(event: Event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
}


mostrarEscudo(equipo: Equipo) {
  const reader = new FileReader();
  reader.onload = e => equipo.escudo = reader.result;

  reader.readAsDataURL(file);
  console.log(equipo.escudo);

}

}
