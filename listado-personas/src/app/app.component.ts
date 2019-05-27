import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';
  personas: Persona[] = [];
  
  constructor(private logginService: LoggingService, private personasService: PersonasService,private loginService: LoginService ) {}

  ngOnInit():void {
    firebase.initializeApp({
      apiKey: "AIzaSyDnP1uudjUv3TbY7QIgnJufgrEXjU_v0cs",
      authDomain: "listado-personas-b76b6.firebaseapp.com"
    })
  }

  onPersonaAgregada(persona: Persona){
    // this.logginService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre);
    // this.personas.push(persona);
    this.personasService.onPersonaAgregada(persona);
  }

  isAuth(){
    return this.loginService.isAuthenticated();
  }

  salir(){
    this.loginService.logout();
  }
}
