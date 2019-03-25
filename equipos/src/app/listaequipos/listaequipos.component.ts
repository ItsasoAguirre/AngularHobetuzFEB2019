import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Equipo } from '../equipo/equipo';

@Component({
  selector: 'app-listaequipos',
  templateUrl: './listaequipos.component.html',
  styleUrls: ['./listaequipos.component.css']
})
export class ListaequiposComponent implements OnInit {

  @Input() listaEquipos: Array<Equipo>;
  searchText: string;

  @Output() emitter: EventEmitter<Equipo> = new EventEmitter<Equipo>();

  constructor() { }

  ngOnInit() {
    this.searchText = '';

  }
  setStyles(equipo: Equipo): any {
    if (equipo.socios > 1000) {
      return 'muchosSocios';
  }}

  enviarObjeto(equipo: Equipo): void {
    this.emitter.emit(equipo);
  }


}
