import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()
export class PersonasService{
    personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private logginService:LoggingService,
                private dataServices: DataServices){}

    setPersonas(personas:Persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }
    
    onPersonaAgregada(persona: Persona){
        this.logginService.enviaMensajeAConsola("Agregamos persona con nombre: " + persona.nombre);
        if(this.personas == null){
           this.personas = []; 
        }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
    }

    modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataServices.modificarPersona(index, persona);
    }
    
    eliminarPersona(index:number){
        this.personas.splice(index,1);
        this.dataServices.eliminarPersona(index);
        //se vuelve a guardar el arreglo
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }
    }
}