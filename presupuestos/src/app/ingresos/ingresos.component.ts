import { Component, OnInit } from '@angular/core';
import { IngresosServicio } from './ingresos.service';
import { Ingreso } from './ingresos.module';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[]=[];

  constructor(private ingresoServicio:IngresosServicio) { }

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }

}
