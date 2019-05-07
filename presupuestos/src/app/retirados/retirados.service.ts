import { Retirado } from './retirados.module';

export class RetiradosServicio{
    retirados:Retirado[] = [
        new Retirado("Renta depto",900),
        new Retirado("Ropa",200)
    ];
    
    eliminar(retirado: Retirado){
        const indice: number = this.retirados.indexOf(retirado);
        this.retirados.splice(indice,1);
    }
}