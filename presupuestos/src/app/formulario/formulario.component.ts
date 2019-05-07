import { Component, OnInit } from '@angular/core';
import { RetiradosServicio } from '../retirados/retirados.service';
import { IngresosServicio } from '../ingresos/ingresos.service';
import { Ingreso } from '../ingresos/ingresos.module';
import { Retirado } from '../retirados/retirados.module';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string="ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio:IngresosServicio, private retiradoServicio:RetiradosServicio) { }

  ngOnInit() {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor(){
    this.tipo === "ingresoOperacion" ? this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput)) : this.retiradoServicio.retirados.push(new Retirado(this.descripcionInput,this.valorInput)) ;
  }
}
