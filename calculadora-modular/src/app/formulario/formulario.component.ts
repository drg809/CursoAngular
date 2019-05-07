import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() operacion = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;

  onSumarOperandos():void{
    let res = this.operandoA + this.operandoB;
    this.operacion.emit(res);
  }

}
