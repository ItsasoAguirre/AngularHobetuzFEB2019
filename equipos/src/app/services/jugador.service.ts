import { Injectable } from '@angular/core';
import { Jugador } from '../jugadores/jugador';
import { Equipo } from '../equipo/equipo';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugadores: Array <Jugador>;

  constructor() {
    this.jugadores = [
      new Jugador('Aritz', 'Aduriz', new Equipo ('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png')),
      new Jugador('Iker', 'Muniain', new Equipo ('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png')),
      new Jugador('Leo', 'Mesi',   new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png')),
      new Jugador('Ander', 'Capa', new Equipo ('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png')),
      new Jugador('Iago', 'Herrerin', new Equipo ('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png')),
      new Jugador('Gerard', 'Pique',   new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png')),
      new Jugador('IÃ±aki', 'Williams', new Equipo ('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png')),
    ];
   }

   getJugadores(): Array<Jugador> {
     return this.jugadores;
   }

   findJugadorByEquipo( equipo: Equipo ): Array<Jugador> {
     return this.jugadores.filter(jugador => jugador.equipo.nombre === equipo.nombre);
   }
}
