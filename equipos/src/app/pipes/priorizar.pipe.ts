import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipo/equipo';

@Pipe({
  name: 'priorizar',
  // pure: false // esto se pone porque nuestro array es mutable, lo optimo seria trabajar con arrays inmutables
})
export class PriorizarPipe implements PipeTransform {

  transform(equipos: Array<Equipo>): Array<Equipo> {
    return equipos.sort((a, b) => (b.socios && !a.socios) ? 1 : -1); }
}
