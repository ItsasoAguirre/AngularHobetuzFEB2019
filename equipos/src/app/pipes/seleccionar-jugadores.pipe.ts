import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../jugadores/jugador';

@Pipe({
  name: 'seleccionarJugadores',
  pure: false
})
export class SeleccionarJugadoresPipe implements PipeTransform {


  transform(jugadores: Array<Jugador>, equipo: string): Array<Jugador> {
    if (equipo !== undefined && equipo.length > 0) {
      equipo = equipo.toLowerCase();
      return jugadores.filter( it => it.equipo.toLowerCase().includes(equipo));
    } else {
      return jugadores;
    }

  }

}
