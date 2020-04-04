import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { WizardEditComponent } from './wizard-edit/wizard-edit.component';


const routes: Routes = [
  { 
      path: 'nuevo-cliente',
      component: WizardComponent
  } ,
  { 
    path: 'ver',
    component: ListaClientesComponent
  },
  { 
    path: 'editar/:id',
    component: WizardEditComponent
  } 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
