import { Component, OnInit } from '@angular/core';
import { Retirado } from './retirados/retirados.module';
import { Ingreso } from './ingresos/ingresos.module';
import { IngresosServicio } from './ingresos/ingresos.service';
import { RetiradosServicio } from './retirados/retirados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  
  ingresos:Ingreso[]=[];
  retirados:Retirado[]=[];

  constructor(private ingresoServicio:IngresosServicio, private retiradoServicio:RetiradosServicio) {
    this.ingresos = ingresoServicio.ingresos;
    this.retirados = retiradoServicio.retirados;
  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getRetiradoTotal(){
    let retiradoTotal:number=0;
    this.retirados.forEach(retirado =>{
      retiradoTotal += retirado.valor;
    });
    return retiradoTotal;
  }

  getPorcentajeTotal(){
    return this.getRetiradoTotal()/this.getIngresoTotal();    
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getRetiradoTotal();
  }

}
