import { Curso } from './curso';

export class Alumno {
    constructor(
        public id: string,
        public nombre: string,
        public apellidos: string,
        public telefono: string,
        public email: string,
        public cursos: Array<Curso>
        ) {  }


}
