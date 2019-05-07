import { Component, OnInit, Input } from '@angular/core';
import { Retirado } from './retirados.module';
import { RetiradosServicio } from './retirados.service';

@Component({
  selector: 'app-retirados',
  templateUrl: './retirados.component.html',
  styleUrls: ['./retirados.component.css']
})
export class RetiradosComponent implements OnInit {
  retirados:Retirado[]=[];
  @Input() ingresoTotal:number;

  constructor(private retiradosServicio:RetiradosServicio) { }

  ngOnInit() {
    this.retirados = this.retiradosServicio.retirados;
  }

  eliminarRegistro(retirado: Retirado){
    this.retiradosServicio.eliminar(retirado);
  }

  calcularPorcentaje(retirado: Retirado){
    return retirado.valor/this.ingresoTotal;
  }
}
