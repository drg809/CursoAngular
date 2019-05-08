import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: PersonasComponent},
  {path: 'personas', component: PersonasComponent },
  {path: 'personas/agregar', component: FormularioComponent },
  {path: 'personas/:id', component: FormularioComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
