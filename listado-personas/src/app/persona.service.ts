import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas: Persona[] = [
        new  Persona("Juan", "Perez"), 
        new Persona("Laura", "Garcia")
    ];

    saludar = new EventEmitter<number>();

    constructor(private logginService:LoggingService){}

    onPersonaAgregada(persona: Persona){
        this.logginService.enviaMensajeAConsola("Agregamos persona con nombre: " + persona.nombre);
        this.personas.push(persona);
    }
    
}