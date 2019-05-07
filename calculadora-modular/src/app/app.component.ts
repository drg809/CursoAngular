import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Modular';
  res: number;

  onSumar(operacion: number){
    this.res = operacion;
  }
}
