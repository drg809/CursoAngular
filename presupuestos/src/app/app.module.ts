import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { RetiradosComponent } from './retirados/retirados.component';
import { RetiradosServicio } from './retirados/retirados.service';
import { IngresosServicio } from './ingresos/ingresos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    IngresosComponent,
    RetiradosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresosServicio, RetiradosServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
