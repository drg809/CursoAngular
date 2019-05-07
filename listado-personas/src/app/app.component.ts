import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  personas: Persona[] = [];
  
  constructor(private logginService: LoggingService, private personasService: PersonasService) {}

  ngOnInit():void {
    this.personas = this.personasService.personas;
  }

  onPersonaAgregada(persona: Persona){
    // this.logginService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre);
    // this.personas.push(persona);
    this.personasService.onPersonaAgregada(persona);
  }

}
