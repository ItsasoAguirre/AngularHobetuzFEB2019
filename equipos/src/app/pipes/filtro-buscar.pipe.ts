import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipo/equipo';

@Pipe({
  name: 'filtroBuscar'

})
export class FiltroBuscarPipe implements PipeTransform {

  transform(equipos: Array<Equipo>, filtro: string): Array<Equipo> {
    if (filtro !== undefined && filtro.length > 0) {
      filtro = filtro.toLowerCase();
      return equipos.filter( it => it.nombre.toLowerCase().includes(filtro));
    } else {
      return equipos;
    }

  }

}
