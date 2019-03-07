import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PriorizarPipe } from './pipes/priorizar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    PriorizarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
