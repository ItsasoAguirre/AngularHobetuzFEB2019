import { Component, OnInit, Input } from '@angular/core';
import { Jugador } from './jugador';
import { Equipo } from '../equipo/equipo';
import { EquipoService } from '../services/equipo.service';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
  equipos: Array<Equipo>;
  equipoSeleccionado: Equipo;
  jugadores: Array<Jugador>;


  constructor(private equipoService: EquipoService , private jugadoresService: JugadorService) { }


  ngOnInit() {
    registerLocaleData(es);
    this.jugadores = this.jugadoresService.getJugadores();
    this.equipos = this.equipoService.getEquipos();


    console.log(this.jugadores);
  }

  mostrarJugadores(equipo: Equipo): void {
    this.jugadoresService.findJugadorByEquipo(equipo);
  }

}
