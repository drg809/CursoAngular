import { Component } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styles: [`
        h1{
            color:blue;
        }
    `]
    //styleUrls: ['./personas.component.css']
})

export class PersonasComponent{
    agregarPersona=false;
    agregarPersonaStatus = "No se ha agregado ninguna persona";
    tituloPersona = "Ingeniero";
    personaCreada = false;

    constructor(){
        setTimeout(
            () => {
                this.agregarPersona = true;
            }
            ,3000);
    }

    onCrearPersona(){
        this.personaCreada = true;
        this.agregarPersonaStatus = "Persona agregada";
    }

    onModificarPersona(event: Event){
        this.tituloPersona = (<HTMLInputElement>event.target).value;
    }
}