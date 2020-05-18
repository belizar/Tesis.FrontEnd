import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoCreditoComponent } from './nuevo-credito/nuevo-credito.component';
import { ListaCreditosComponent } from './lista-creditos/lista-creditos.component';
import { VerParametrosComponent } from './ver-parametros/ver-parametros.component';
import { NuevoParametroComponent } from './nuevo-parametro/nuevo-parametro.component';

const routes: Routes = [
  {
      path: 'nuevo-credito',
      component: NuevoCreditoComponent
  },
  {
    path: 'ver',
    component: ListaCreditosComponent
  },
  {
    path: 'ver-parametros',
    component: VerParametrosComponent
  },
  {
    path: 'nuevo-parametro',
    component: NuevoParametroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }
