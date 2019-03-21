import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo/equipo';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  equipos: Array<Equipo>;

  constructor() { }


  ngOnInit() {
    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png'),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png'),
      new Equipo('Deportivo Alaves', 'Vitoria', 17512 , 1921, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/alaves_109484.png'),
      new Equipo('Real Club Celta de Vigo', 'Vigo', 22104, 1923, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/celta-de-vigo_109482.png')
    ];
  }

  obtenerEquipos(equiposRecibir: Array<Equipo>): void {
    console.log(equiposRecibir);
    this.equipos = equiposRecibir;
  }

}
