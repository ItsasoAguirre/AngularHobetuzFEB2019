import { Alumno } from './alumno';

export class Curso {
    constructor(
    public id: string,
    public nombre: string,
    public horas: number,
    public alumnos: Array<Alumno>
    ) {  }


}