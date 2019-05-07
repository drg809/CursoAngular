import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() presupuestoTotal: number;
  @Input() ingresoTotal: number;
  @Input() retiradoTotal: number;
  @Input() porcentajeTotal: number;


  constructor() { }

  ngOnInit() {
  }

}
