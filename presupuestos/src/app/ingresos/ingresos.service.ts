import { Ingreso } from './ingresos.module';

export class IngresosServicio{
    ingresos:Ingreso[] = [
        new Ingreso("Salario",4000),
        new Ingreso("Venta de coche",400)
    ];

    eliminar(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}