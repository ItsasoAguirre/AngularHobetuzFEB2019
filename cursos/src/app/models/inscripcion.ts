import { Alumno } from './alumno';
import { Curso } from './curso';

export class Inscripcion {
    constructor(
        public alumno: Alumno,
        public curso: Curso
    ) {}
}
