import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from './equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']

})
export class EquipoComponent implements OnInit {
  @Input() equipos: Array<Equipo>;
  nuevoEquipo: Equipo;
  equipoSeleccionado: Equipo;
  formGroup: FormGroup;
  constructor( private formBuilder: FormBuilder ) { }


  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 44171, 1898, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png'),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 143459, 1899, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png'),
      new Equipo('Deportivo Alaves', 'Vitoria', 17512 , 1921, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/alaves_109484.png'),
      new Equipo('Real Club Celta de Vigo', 'Vigo', 22104, 1923, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/celta-de-vigo_109482.png')
    ];

  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fundacion: [0, [Validators.required, Validators.minLength(4)]],
      socios: [0, [Validators.required, Validators.minLength(4)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      escudo: ['', [Validators.required]]
    });
  }
  addToArray() {
    this.equipos.push(this.nuevoEquipo);
    this.nuevoEquipo = new Equipo('', '', 0, 0, '');
    this.buildForm();
    console.log(this.equipos);
  }
  register(formGroup: FormGroup): void {
    console.log(formGroup);
    if (formGroup) {
      if (formGroup.value) {
        this.nuevoEquipo.nombre = formGroup.value.nombre;
        this.nuevoEquipo.ciudad = formGroup.value.ciudad;
        this.nuevoEquipo.socios = formGroup.value.socios;
        this.nuevoEquipo.anyoFundacion = formGroup.value.fundacion;
        this.nuevoEquipo.escudo = formGroup.value.escudo;
        this.addToArray();
      }
    }
  }

  mostrarEquipo(equipo: Equipo): Equipo {
    return this.equipoSeleccionado = equipo;
  }

  capturarObjeto(obj: Equipo): void {
    console.log(obj);
    this.equipoSeleccionado = obj;
  }

}
