import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoCreditoComponent } from './nuevo-credito/nuevo-credito.component';
import { ListaCreditosComponent } from './lista-creditos/lista-creditos.component';

const routes: Routes = [
  { 
      path: 'nuevo-credito',
      component: NuevoCreditoComponent
  },
  { 
    path: 'ver',
    component: ListaCreditosComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditosRoutingModule { }
