import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoCreditoComponent } from './nuevo-credito/nuevo-credito.component';
import { CreditosRoutingModule } from './creditos-routing.module';
import { ListaCreditosComponent } from './lista-creditos/lista-creditos.component';
import { AppcommonModule } from '../appcommon/appcommon.module';
import { NuevoParametroComponent } from './nuevo-parametro/nuevo-parametro.component';
import { VerParametrosComponent } from './ver-parametros/ver-parametros.component';

@NgModule({
  declarations: [NuevoCreditoComponent, ListaCreditosComponent, NuevoParametroComponent, VerParametrosComponent],
  imports: [
    CommonModule,
    CreditosRoutingModule,
    AppcommonModule
  ]
})
export class CreditosModule { }
