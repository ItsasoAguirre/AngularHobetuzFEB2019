import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';

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
    this.equipos = [];
    this.nuevoEquipo = new Equipo('', '', 0, 0);
    this.searchText = '';
  }

  addToArray() {
    this.equipos.push(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0);
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
}
