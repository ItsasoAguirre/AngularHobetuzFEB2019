import { Equipo } from '../equipo/equipo';

export class Jugador {
    constructor(
        public nombre: string,
        public apellido: string,
        public equipo: Equipo
    ) {  }
}
