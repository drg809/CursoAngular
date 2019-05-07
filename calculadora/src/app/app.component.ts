import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  operandoA: number;
  operandoB: number;
  res: number;

  onSumarOperandos():void{
    this.res = this.operandoA + this.operandoB;
  }
}
