import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>(); 
  nombreInput:string;
  apellidoInput:string;
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private logginService:LoggingService, private personasService:PersonasService, private router: Router) {
     this.personasService.saludar.subscribe(
       (indice: number) => alert("El indice es: "+indice)
     );
  }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personasService.onPersonaAgregada(persona1);
    this.router.navigate(['personas']);
  }
}
